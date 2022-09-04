<template>
  <div>
    <ContentHeader :title="'Dahili Giriş Çıkış'" />
    <div v-if="isComplete">
      <InternelFilter
        @itemFilter="list = $event"
        @itemFilterLinks="links = $event"
        :list="list"
      />
      <Buttons
        btnType="internel"
        :buttonTitle="buttonTitle"
        @refreshData="list = $event"
        :fun="getInternel"
      />
      <div v-if="list.length == 0" class="col-md-12">
        <isEmptyAlert :buttonTitle="buttonTitle" />
      </div>
      <div v-else class="">
        <div class="row ml-3">
          <div class="sales d-flex justift-content-center align-items-center">
            <div class="sales-circle mr-2"></div>
            <div class="sales-text">
              <b>Giriş</b>
            </div>
          </div>
          <div
            class="return d-flex justift-content-center align-items-center ml-4"
          >
            <div class="return-circle mr-2"></div>
            <div class="return-text">Çıkış</div>
          </div>
        </div>
        <hr />
        <div class="row">
          <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
            <div class="card mb-3">
              <div class="card-body">
                <div class="table-responsive">
                  <table id="example1" class="table table-hover display">
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>NO</th>
                        <th>Ürün Adedi</th>
                        <th>Tarih</th>
                        <th>{{ $t("TRANSACTIONS") }}</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="(item, i) in list.data" :key="i">
                        <td style="width: 1px">
                          <div
                            v-if="item.type == '1'"
                            class="sales-circle"
                          ></div>
                          <div v-else class="return-circle"></div>
                        </td>
                        <td>{{ item.internel_no }}</td>
                        <td>{{ item.productQty }}</td>
                        <td>{{ item.internel_date.substr(0, 10) }}</td>
                        <td>
                          <div class="d-flex">
                            <button
                              @click="getDetail(item.id)"
                              class="btn btn-primary mr-2"
                            >
                              <i class="fa fa-eye"></i>
                            </button>
                            <router-link :to="'/internel/' + item.id">
                              <button class="btn btn-warning mr-2">
                                <i class="fa fa-edit"></i>
                              </button>
                            </router-link>
                            <button
                              class="btn btn-danger"
                              @click="remove(item.id)"
                            >
                              <i class="fa fa-trash"></i>
                            </button>
                          </div>
                        </td>
                        <InternelDetail :item="item" />
                      </tr>
                    </tbody>
                  </table>
                </div>
                <nav
                  v-if="links.length > 1"
                  class="d-flex justify-content-center"
                  aria-label="Page navigation example"
                >
                  <ul class="pagination">
                    <li v-for="(item, i) in links" :key="i" class="page-item">
                      <a class="page-link" @click="getInternel(i + 1)">{{
                        item.label
                      }}</a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
            <!-- end card-->
          </div>
        </div>
      </div>
    </div>
    <div v-else class="" style="text-align: center">
      <div class="spinner-border" role="status"></div>
    </div>
  </div>
</template>

<script>
import ContentHeader from "@/components/shared/ContentHeader";
import InternelDetail from "../../components/InternelDetail.vue";
import InternelFilter from "../../components/filter/InternelFilter.vue";
import Buttons from "../../components/Buttons.vue";
import axios from "axios";

export default {
  middleware: "auth-admin",

  data() {
    return {
      title: "Dahili Giriş Çıkış",
      buttonTitle: "Dahili Giriş Çıkış",
      list: [],
      item: null,
      loadPage: false,
      isComplete: false,
      links: null,
    };
  },
  components: {
    ContentHeader,
    InternelDetail,
    InternelFilter,
    Buttons,
  },
  created() {
    this.getInternel();
  },
  methods: {
    async getInternel(page) {
      this.loadPage = false;
      await axios
        .post("/api/internel?page=" + page)
        .then((result) => {
          this.isComplete = true;
          this.loadPage = true;
          result.data.links.pop();
          result.data.links.shift();
          this.links = result.data.links;
          this.list = result.data;
        })
        .catch((err) => {});
    },
    async getDetail(id) {
      await axios.post("/api/internel/detail/" + id).then((result) => {
        this.item = result.data;
        $("#exampleModal-" + id).modal("show");
      });
    },
    async remove(id) {
      this.$swal
        .fire({
          title: this.$t("DELETED_CONFIRM") + "?",
          text: this.$t("DELETED_TEXT"),
          icon: "Warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: this.$t("DELETE_YES"),
        })
        .then(async (result) => {
          if (result.value) {
            await axios
              .post("/api/internel/remove/" + id)
              .then(async (result) => {
                await this.$store.dispatch("LIST", "internel");
                this.item = result.data;
                console.log(this.item);
                this.$swal
                  .fire(
                    this.$t("DELETED") + "!",
                    this.$t("SUCCESS_TEXT"),
                    "success"
                  )
                  .then(async (result) => {
                    await setTimeout(async () => {
                      this.list = await this.$store.state.list;
                    }, 1500);
                    // await location.reload();
                  })
                  .catch((err) => {});
              })
              .catch((err) => {});
          }
        });
    },
    moneyFormat(number) {
      var formatter = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      });
      return formatter.format(number);
    },
  },
  head() {
    return {
      title: this.title,
    };
  },
};
</script>

<style  scoped>
.sales-circle {
  background-color: green;
  width: 10px;
  height: 10px;
  border-radius: 100%;
}

.sales-text {
  color: green;
}

.return-circle {
  background-color: rgb(216, 31, 31);
  width: 10px;
  height: 10px;
  border-radius: 100%;
}

.return-text {
  color: rgb(216, 31, 31);
}
</style>
