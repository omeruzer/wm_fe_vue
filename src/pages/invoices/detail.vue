<template>
  <div>
    <ContentHeader :title="$t('INVOICES')" />

    <div class="row mb-3" style="justify-content: end">
      <div class="d-flex justify-content-end">
        <router-link to="/invoices" class="btn btn-info mr-3"
          ><i class="fa fa-arrow-left mr-2"></i> {{ $t("BACK") }}
        </router-link>
      </div>
    </div>

    <div v-if="isComplete" class="row">
      <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
        <div class="card mb-3">
          <div class="card-body">
            <div class="row">
              <div class="col-md-12">
                <div class="">
                  <h5>
                    {{ $t("INVOICE_NO") }}: <b>{{ item.invoice_no }}</b>
                  </h5>
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                  <label for="">{{ $t("CUSTOMER") }}</label>
                  <select
                    id=""
                    v-model="item.customer_id"
                    class="form-control mb-3"
                  >
                    <option
                      class=""
                      v-for="(item, i) in customers"
                      :key="i"
                      :value="item.id"
                    >
                      {{ item.name }}
                    </option>
                  </select>
                </div>
              </div>
              <div class="col-md-6">
                <b-form-group :label="$t('INVOICE_TYPE')">
                  <div class="d-flex">
                    <b-form-radio
                      v-model="item.type"
                      class="m-2"
                      name="some-radios"
                      value="1"
                    >
                      {{ $t("SELL") }}
                    </b-form-radio>
                    <b-form-radio
                      v-model="item.type"
                      class="m-2"
                      name="some-radios"
                      value="0"
                    >
                      {{ $t("RETURN") }}
                    </b-form-radio>
                  </div>
                </b-form-group>
              </div>
            </div>
            <div class="row">
              <div class="col-md-12">
                <b-form-group :label="$t('INVOICE_DATE')">
                  <div class="d-flex">
                    <input
                      type="date"
                      name=""
                      class="form-control"
                      v-model="item.invoice_date"
                      id=""
                    />
                    <!-- <b-form-datepicker
                      v-model="item.invoice_date"
                    ></b-form-datepicker> -->
                  </div>
                </b-form-group>
              </div>
            </div>
            <div class="row">
              <div class="ml-2">
                <h4>{{ $t("PRODUCTS") }}</h4>
              </div>
            </div>
            <div
              class="row"
              v-for="(invoiceProduct, index) in item.get_detail"
              :key="index"
            >
              <div class="col-md-6">
                <b-form-group>
                  <label for="">{{ $t("PRODUCT") }}</label>
                  <select
                    id=""
                    v-model="invoiceProduct.product_id"
                    class="form-control mb-3"
                  >
                    <option
                      class=""
                      v-for="(product, i) in products"
                      :key="i"
                      :value="product.id"
                    >
                      {{ product.code }} /{{ product.name }}
                    </option>
                  </select>
                </b-form-group>
              </div>
              <div class="col-md-2">
                <b-form-group>
                  <label for="">{{ $t("QTY") }}</label>
                  <b-form-input
                    v-model="invoiceProduct.qty"
                    :placeholder="$t('QTY')"
                    required
                  >
                  </b-form-input>
                </b-form-group>
              </div>
              <div class="col-md-3">
                <b-form-group>
                  <label for="">{{ $t("PRICE") }}</label>
                  <b-form-input
                    :placeholder="$t('PRICE')"
                    v-model="invoiceProduct.price"
                    required
                  >
                  </b-form-input>
                </b-form-group>
              </div>
              <div
                class="col-md-1"
                style="
                  display: flex;
                  justify-content: center;
                  align-items: center;
                "
              >
                <!-- <button class="btn btn-danger" @click="removeInvoiceProductControl(invoiceProduct.id)"><i
                    class="fa fa-trash"></i></button> -->
              </div>
            </div>

            <div
              class="row"
              v-for="(newProduct, index) in invoiceProducts"
              :key="index"
            >
              <div class="col-md-6">
                <b-form-group>
                  <label for="">{{ $t("PRODUCT") }}</label>
                  <select
                    id=""
                    v-model="newProduct.product_id"
                    class="form-control mb-3"
                  >
                    <option
                      class=""
                      v-for="(product, i) in products"
                      :key="i"
                      :value="product.id"
                    >
                      {{ product.code }} / {{ product.name }}
                    </option>
                  </select>
                </b-form-group>
              </div>
              <div class="col-md-2">
                <b-form-group>
                  <label for="">{{ $t("QTY") }}</label>
                  <b-form-input
                    type="number"
                    v-model="newProduct.qty"
                    :placeholder="$t('QTY')"
                    required
                  >
                  </b-form-input>
                </b-form-group>
              </div>
              <div class="col-md-3">
                <b-form-group>
                  <label for="">{{ $t("PRICE") }}</label>
                  <b-form-input
                    type="number"
                    v-model="newProduct.price"
                    :placeholder="$t('PRICE')"
                    required
                  >
                  </b-form-input>
                </b-form-group>
              </div>
              <div
                class="col-md-1"
                style="
                  display: flex;
                  justify-content: center;
                  align-items: center;
                "
              >
                <button
                  class="btn btn-danger"
                  @click="removeNewInvoiceProductControl(newProduct.id)"
                >
                  <i class="fa fa-trash"></i>
                </button>
              </div>
            </div>

            <div class="row">
              <div
                class="col-md-12"
                style="display: flex; justify-content: end; align-items: center"
              >
                <button class="btn btn-success" @click="addInvoiceProduct">
                  <i class="fa fa-plus"></i> {{ $t("ADD_PRODUCT_TO_INVOICE") }}
                </button>
              </div>
            </div>

            <div class="row m-3 d-flex justify-content-end">
              <div class="card p-4 float-right">
                <span
                  >{{ $t("PRODUCT_TYPE") }}:
                  <b>{{
                    item.get_detail.length + invoiceProducts.length
                  }}</b></span
                >
                <span
                  >{{ $t("TOTAL_PRODUCT_COUNT") }}:
                  <b>{{ totalProductCount() }}</b></span
                >
                <span
                  >{{ $t("TOTAL_INVOICE_AMOUNT") }}:
                  <b>{{ totalPrice() }}₺</b></span
                >
              </div>
            </div>

            <div class="row d-flex justify-content-end">
              <div class="form-group">
                <button
                  class="btn btn-info"
                  id="editBtn"
                  @click="updateInvoice()"
                >
                  {{ $t("UPDATE") }}
                </button>
              </div>
            </div>
          </div>
        </div>
        <!-- end card-->
      </div>
    </div>
    <div v-else class="" style="text-align: center">
      <div class="spinner-border" role="status"></div>
    </div>

    <!-- Modal -->
  </div>
</template>

<script>
import ContentHeader from "@/components/shared/ContentHeader";
import axios from "axios";
export default {
  middleware: "auth-admin",

  data() {
    return {
      title: this.$t("INVOICES"),
      buttonTitle: this.$t("INVOICE"),
      item: {},
      customers: [],
      products: [],
      isComplete: false,
      invoiceProducts: [],
    };
  },
  components: {
    ContentHeader,
  },
  async created() {
    await this.getInvoiceDetail();
    await this.getCustomer();
    await this.getProduct();
  },
  methods: {
    async getInvoiceDetail() {
      await axios
        .post("/api/invoice/detail/" + this.$route.params.id)
        .then(async (result) => {
          this.item = result.data;
          this.isComplete = true;
          await this.totalPrice();
          await this.totalProductCount();
          console.log(this.item);
        });
    },
    async updateInvoice() {
      document.getElementById("editBtn").setAttribute("disabled", "");

      await axios
        .post(`/api/invoice/edit/${this.$route.params.id}`, this.item)
        .then(async (result) => {
          await this.item.get_detail.map(async (e) => {
            await axios
              .post(`/api/invoice-product/edit/${e.id}`, {
                invoice_id: Number(this.$route.params.id),
                product_id: e.product_id,
                qty: e.qty,
                price: Number(e.price),
              })
              .then(async (result) => {
                console.log(result.data);
              });
          });
          await this.invoiceProducts.map(async (e) => {
            await axios
              .post(`/api/invoice-product/add/`, {
                invoice_id: Number(this.$route.params.id),
                product_id: Number(e.product_id),
                qty: Number(e.qty),
                price: Number(e.price),
              })
              .then(async (result) => {
                console.log(result.data);
              });
          });
          await this.$swal
            .fire(this.$t("UPDATED"), this.$t("SUCCESS_TEXT"), "success")
            .then(async (result) => {
              await location.reload();
            })
            .catch((err) => {});
        });
    },
    async getCustomer() {
      await axios
        .post("/api/customer")
        .then((result) => {
          this.customers = result.data;
        })
        .catch((err) => {});
    },
    async getProduct() {
      await axios
        .post("/api/product/all")
        .then((result) => {
          this.products = result.data;
        })
        .catch((err) => {});
    },
    async removeInvoiceProductControl(id) {
      this.$swal
        .fire({
          title: this.$t("DELETED_CONFIRM") + "?",
          text: this.$t("DELETE_TEXT_INVOICE"),
          icon: "Warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: this.$t("DELETE_YES"),
        })
        .then((result) => {
          if (result.value) {
            this.removeInvoiceProduct(id);
          }
        });
    },
    async removeInvoiceProduct(id) {
      await axios
        .post(`/api/invoice-product/remove/${id}`)
        .then((result) => {
          this.$swal
            .fire(
              this.$t("DELETED_PRODUCT_INVOICE"),
              this.$t("SUCCESS_TEXT"),
              "success"
            )
            .then(async (result) => {
              await this.getInvoiceDetail();
            })
            .catch((err) => {});
        })
        .catch((err) => {});
    },
    async removeNewInvoiceProductControl(id) {
      this.$swal
        .fire({
          title: this.$t("DELETED_CONFIRM") + "?",
          text: this.$t("DELETE_TEXT_INVOICE"),
          icon: "Warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: this.$t("DELETE_YES"),
        })
        .then((result) => {
          if (result.value) {
            this.removeNewInvoiceProduct(id);
          }
        });
    },
    async removeNewInvoiceProduct(id) {
      const a = this.invoiceProducts.find((e) => id == id);
      const s = this.invoiceProducts.indexOf(a);
      this.invoiceProducts.splice(s, 1);
      console.log(a);
    },
    async addInvoiceProduct() {
      const newProduct = {
        id: Math.ceil(Math.random() * 1000000),
        product_id: null,
        qty: null,
        price: null,
      };

      this.invoiceProducts.push(newProduct);
      console.log(this.invoiceProducts);
    },
    totalPrice() {
      var total = 0;
      var newTotal = 0;

      this.item.get_detail.map((e) => (total = total + e.price * e.qty));
      this.invoiceProducts.map((e) => (newTotal = newTotal + e.price * e.qty));

      return total + newTotal;
    },
    totalProductCount() {
      var count = 0;
      var newTotal = 0;

      this.item.get_detail.map((e) => (count = +count + +e.qty));
      this.invoiceProducts.map((e) => (newTotal = +newTotal + +e.qty));

      return newTotal + count;
    },
  },

  head() {
    return {
      title: this.title,
    };
  },
};
</script>


<style lang="scss" scoped>
</style>
