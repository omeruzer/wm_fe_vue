<template>
  <div>
    <ContentHeader :title="$t('INVOICES')" />
    <div v-if="isComplete">
      <InvoiceFilter
        @itemFilter="list = $event"
        @itemFilterLinks="links = $event"
        :list="list"
      />
      <Buttons
        btnType="invoice"
        :buttonTitle="buttonTitle"
        @refreshData="list = $event"
        :fun="getInvoice"
      />
      <div v-if="list.length == 0" class="col-md-12">
        <isEmptyAlert :buttonTitle="buttonTitle" />
      </div>
      <div v-else class="">
        <div class="row ml-3">
          <div class="sales d-flex justift-content-center align-items-center">
            <div class="sales-circle mr-2"></div>
            <div class="sales-text">
              <b>{{ $t("SELL") }}</b>
            </div>
          </div>
          <div
            class="return d-flex justift-content-center align-items-center ml-4"
          >
            <div class="return-circle mr-2"></div>
            <div class="return-text">{{ $t("RETURN") }}</div>
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
                        <th>{{ $t("INVOICE_NO") }}</th>
                        <th>{{ $t("CUSTOMER") }}</th>
                        <th>{{ $t("PRODUCT_COUNT") }}</th>
                        <th>{{ $t("INVOICE_AMOUNT") }}</th>
                        <th>{{ $t("INVOICE_DATE") }}</th>
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
                        <td>{{ item.invoice_no }}</td>
                        <td>{{ item.get_customer.name }}</td>
                        <td>{{ item.productQty }}</td>
                        <td>
                          {{ moneyFormat(item.amount).substr(1) }}
                          {{ money }}
                        </td>
                        <td>{{ item.invoice_date.substr(0, 10) }}</td>
                        <td>
                          <div class="d-flex">
                            <button
                              @click="getDetail(item.id)"
                              class="btn btn-primary mr-2"
                            >
                              <i class="fa fa-eye"></i>
                            </button>
                            <router-link :to="'/invoices/' + item.id">
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
                        <InvoiceDetail :item="item" />
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
                      <a class="page-link" @click="getInvoice(i + 1)">{{
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
import InvoiceDetail from "../../components/InvoiceDetail.vue";
import InvoiceFilter from "../../components/filter/InvoiceFilter.vue";
import Buttons from "../../components/Buttons.vue";
import axios from "axios";

export default {
  middleware: "auth-admin",

  data() {
    return {
      title: this.$t("INVOICES"),
      buttonTitle: this.$t("INVOICE"),
      list: [],
      item: null,
      loadPage: false,
      isComplete: false,
      links: null,
      money: JSON.parse(localStorage.getItem("user")).money,
    };
  },
  components: {
    ContentHeader,
    InvoiceDetail,
    InvoiceFilter,
    Buttons,
  },
  created() {
    this.getInvoice();
  },
  methods: {
    async getInvoice(page) {
      this.loadPage = false;
      await axios
        .post("/api/invoice?page=" + page)
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
      await axios.post("/api/invoice/detail/" + id).then((result) => {
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
              .post("/api/invoice/remove/" + id)
              .then(async (result) => {
                await this.$store.dispatch("LIST", "invoice");
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
