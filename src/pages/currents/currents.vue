<template>
  <div>
    <ContentHeader :title="$t('CURRENT')" />
    <div v-if="isComplete">
      <div class="row mb-3">
        <div class="col-md-12">
          <div class="d-flex justify-content-end">
            <i
              @click="getCurrentItems"
              class="fa fa-refresh"
              style="cursor: pointer"
            ></i>
          </div>
        </div>
      </div>
      <div class="">
        <CurrentCards
          v-if="isComplete"
          :item="currentItems"
          :loader="currentItemsLoad"
        />
        <div v-else class="d-flex justify-content-center">
          <Loader />
        </div>
      </div>
      <Buttons
        btnType="current"
        :buttonTitle="buttonTitle"
        @refreshData="list = $event"
        :currentFunc="getCurrent"
      />

      <div v-if="list.length == 0" class="col-md-12">
        <isEmptyAlert :buttonTitle="buttonTitle" />
      </div>
      <div v-else class="">
        <div class="row ml-3">
          <div class="sales d-flex justift-content-center align-items-center">
            <div class="sales-circle mr-2"></div>
            <div class="sales-text"><b>Gelir</b></div>
          </div>
          <div
            class="return d-flex justift-content-center align-items-center ml-4"
          >
            <div class="return-circle mr-2"></div>
            <div class="return-text">Gider</div>
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
                        <th>Başlık</th>
                        <th>Açıklama</th>
                        <th>Miktar</th>
                        <th>Tarih</th>
                        <th>{{ $t("TRANSACTIONS") }}</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="(item, i) in list" :key="i">
                        <td style="width: 1px">
                          <div v-if="item.type" class="sales-circle"></div>
                          <div v-else class="return-circle"></div>
                        </td>
                        <td>{{ item.title }}</td>
                        <td>{{ item.desc ? item.desc : "-" }}</td>
                        <td>
                          {{ moneyFormat(item.price).substr(1) }}
                          {{ money }}
                        </td>
                        <td>{{ item.current_date.substr(0, 10) }}</td>
                        <td>
                          <div class="d-flex">
                            <button
                              @click="getDetail(item.id)"
                              class="btn btn-primary mr-2"
                            >
                              <i class="fa fa-eye"></i>
                            </button>
                            <router-link :to="'/current/' + item.id">
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
                        <CurrentDetail :item="item" />
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
                      <a class="page-link" @click="getCurrent(i + 1)">{{
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
import CurrentCards from "../../components/CurrentCards.vue";
import CurrentDetail from "../../components/CurrentDetail.vue";
import ContentHeader from "../../components/shared/ContentHeader.vue";
import axios from "axios";
import Buttons from "../../components/Buttons.vue";
export default {
  components: { ContentHeader, CurrentDetail, CurrentCards, Buttons },
  data() {
    return {
      title: this.$t("CURRENT"),
      buttonTitle: this.$t("CURRENT"),
      list: [],
      item: null,
      loadPage: false,
      isComplete: false,
      links: null,
      currentItems: null,
      currentItemsLoad: false,
      money: JSON.parse(localStorage.getItem("user")).money,
    };
  },
  head() {
    return {
      title: this.title,
    };
  },
  created() {
    this.getCurrent();
    this.getCurrentItems();
  },
  methods: {
    async getCurrent(page) {
      this.loadPage = false;
      await axios
        .post("/api/current?page=" + page)
        .then((result) => {
          this.isComplete = true;
          this.loadPage = true;
          result.data.links.pop();
          result.data.links.shift();
          this.links = result.data.links;
          this.list = result.data.data;
        })
        .catch((err) => {});
    },
    async getDetail(id) {
      await axios.post("/api/current/detail/" + id).then((result) => {
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
        .then((result) => {
          if (result.value) {
            this.$swal
              .fire(
                this.$t("DELETED") + "!",
                this.$t("SUCCESS_TEXT"),
                "success"
              )
              .then(async (result) => {
                await axios
                  .post("/api/current/remove/" + id)
                  .then(async (result) => {
                    await this.getCurrent();
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
    async getCurrentItems() {
      await axios
        .post("/api/current/current-count")
        .then((result) => {
          this.currentItems = result.data;
          this.currentItemsLoad = true;
        })
        .catch((err) => {});
    },
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
