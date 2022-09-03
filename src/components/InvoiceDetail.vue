<template>
  <div>
    <div
      class="modal fade"
      :id="'exampleModal-' + item.id"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">
              <code>{{ item.invoice_no }}</code>
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <div class="d-block text-center">
              <div class="row">
                <div class="form-group ml-3">
                  <div class="">
                    <div class="d-flex">
                      <label for="">{{ $t("INVOICE_TYPE") }}:</label>
                      <span>
                        <div
                          v-if="item.type == 1"
                          class="
                            sales
                            d-flex
                            justift-content-center
                            align-items-center
                            ml-2
                          "
                        >
                          <div class="sales-circle mr-2"></div>
                          <div class="sales-text">
                            <b>{{ $t("SELL") }}</b>
                          </div>
                        </div>
                        <div
                          v-else
                          class="
                            return
                            d-flex
                            justift-content-center
                            align-items-center
                            ml-2
                          "
                        >
                          <div class="return-circle mr-2"></div>
                          <div class="return-text">{{ $t("RETURN") }}</div>
                        </div>
                      </span>
                    </div>
                    <div class="d-flex">
                      <label for="">{{ $t("INVOICE_DATE") }}:</label>
                      <span class="ml-2">{{
                        item.invoice_date.substr(0, 10)
                      }}</span>
                    </div>
                    <div class="d-flex">
                      <label for="">{{ $t("CUSTOMER_NAME") }}:</label>
                      <span class="ml-2">{{ item.get_customer.name }}</span>
                    </div>
                    <div class="d-flex">
                      <label for="">{{ $t("ADDRESS") }}:</label>
                      <p class="ml-2">{{ item.get_customer.address }}</p>
                    </div>
                    <div class="d-flex">
                      <label for="">{{ $t("PHONE_NUMBER") }}:</label>
                      <span class="ml-2">{{ item.get_customer.phone }}</span>
                    </div>
                    <div class="d-flex">
                      <label for="">{{ $t("E-MAIL") }}:</label>
                      <span class="ml-2">{{ item.get_customer.email }}</span>
                    </div>
                  </div>
                  <div class="row ml-1 mt-3">
                    <div class="col-md-12">
                      <div class="d-flex justify-content-start">
                        <h4>{{ $t("PRODUCTS") }}</h4>
                      </div>
                    </div>
                    <hr />
                    <div class="col-md-12">
                      <div class="products d-flex justify-content-between">
                        <div class="">
                          <b>{{ $t("PRODUCT") }}</b>
                        </div>
                        <div class="">
                          <b>{{ $t("QTY") }}</b>
                        </div>
                        <div class="">
                          <b>{{ $t("PRICE") }}</b>
                        </div>
                      </div>
                      <div v-for="(product, i) in item.get_detail" :key="i">
                        <div class="products d-flex justify-content-between">
                          <div
                            v-b-tooltip.hover
                            :title="product.get_product.name"
                            class=""
                          >
                            <b>{{ product.get_product.code }} </b>
                          </div>
                          <div class="">
                            <b>{{ product.qty }}</b> {{ $t("QTY") }}
                          </div>
                          <div class="">
                            <b>{{ product.price }}₺</b>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="row ml-1 mt-3">
                    <div class="col-md-12">
                      <div class="d-flex justify-content-start">
                        <h4>{{ $t("TOTAL") }}</h4>
                      </div>
                    </div>
                    <hr />
                    <div class="col-md-12">
                      <div class="total">
                        <div class="">
                          {{ $t("PRODUCT_TYPE") }}:
                          <b> {{ totalProduct() }} </b>
                        </div>
                        <div class="">
                          {{ $t("TOTAL_PRODUCT_COUNT") }}:
                          <b> {{ totalProductCount() }} </b>
                        </div>
                        <div class="">
                          {{ $t("TOTAL_INVOICE_AMOUNT") }}:
                          <b> {{ total() }}₺ </b>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-12">
                  <div class="d-flex justify-content-end">
                    <a :href="'http://localhost:8000/invoice-pdf/' + item.id">
                      <button class="btn btn-primary">Faturayı İndir</button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Kapat
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- <b-modal :id="'bv-modal-example-' + item.id" ok-only :ok-title="$t('OKEY')">
      <template #modal-title>
        <code>{{ item.invoice_no }}</code>
      </template>
      <div class="d-block text-center">
        <div class="row">
          <div class="form-group ml-3">
            <div class="">
              <div class="d-flex">
                <label for="">{{ $t("INVOICE_TYPE") }}:</label>
                <span>
                  <div
                    v-if="item.type == 1"
                    class="
                      sales
                      d-flex
                      justift-content-center
                      align-items-center
                      ml-2
                    "
                  >
                    <div class="sales-circle mr-2"></div>
                    <div class="sales-text">
                      <b>{{ $t("SELL") }}</b>
                    </div>
                  </div>
                  <div
                    v-else
                    class="
                      return
                      d-flex
                      justift-content-center
                      align-items-center
                      ml-2
                    "
                  >
                    <div class="return-circle mr-2"></div>
                    <div class="return-text">{{ $t("RETURN") }}</div>
                  </div>
                </span>
              </div>
              <div class="d-flex">
                <label for="">{{ $t("INVOICE_DATE") }}:</label>
                <span class="ml-2">{{ item.invoice_date.substr(0, 10) }}</span>
              </div>
              <div class="d-flex">
                <label for="">{{ $t("CUSTOMER_NAME") }}:</label>
                <span class="ml-2">{{ item.get_customer.name }}</span>
              </div>
              <div class="d-flex">
                <label for="">{{ $t("ADDRESS") }}:</label>
                <p class="ml-2">{{ item.get_customer.address }}</p>
              </div>
              <div class="d-flex">
                <label for="">{{ $t("PHONE_NUMBER") }}:</label>
                <span class="ml-2">{{ item.get_customer.phone }}</span>
              </div>
              <div class="d-flex">
                <label for="">{{ $t("E-MAIL") }}:</label>
                <span class="ml-2">{{ item.get_customer.email }}</span>
              </div>
            </div>
            <div class="row ml-1 mt-3">
              <div class="col-md-12">
                <div class="d-flex justify-content-start">
                  <h4>{{ $t("PRODUCTS") }}</h4>
                </div>
              </div>
              <hr />
              <div class="col-md-12">
                <div class="products d-flex justify-content-between">
                  <div class="">
                    <b>{{ $t("PRODUCT") }}</b>
                  </div>
                  <div class="">
                    <b>{{ $t("QTY") }}</b>
                  </div>
                  <div class="">
                    <b>{{ $t("PRICE") }}</b>
                  </div>
                </div>
                <div v-for="(product, i) in item.get_detail" :key="i">
                  <div class="products d-flex justify-content-between">
                    <div
                      v-b-tooltip.hover
                      :title="product.get_product.name"
                      class=""
                    >
                      <b>{{ product.get_product.code }} </b>
                    </div>
                    <div class="">
                      <b>{{ product.qty }}</b> {{ $t("QTY") }}
                    </div>
                    <div class="">
                      <b>{{ product.price }}₺</b>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="row ml-1 mt-3">
              <div class="col-md-12">
                <div class="d-flex justify-content-start">
                  <h4>{{ $t("TOTAL") }}</h4>
                </div>
              </div>
              <hr />
              <div class="col-md-12">
                <div class="total">
                  <div class="">
                    {{ $t("PRODUCT_TYPE") }}: <b> {{ totalProduct() }} </b>
                  </div>
                  <div class="">
                    {{ $t("TOTAL_PRODUCT_COUNT") }}:
                    <b> {{ totalProductCount() }} </b>
                  </div>
                  <div class="">
                    {{ $t("TOTAL_INVOICE_AMOUNT") }}:
                    <b> {{ total() }}₺ </b>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12">
            <div class="d-flex justify-content-end">
              <a :href="'http://localhost:8000/invoice-pdf/'+item.id">
                <button class="btn btn-primary" >
                Faturayı İndir
              </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </b-modal> -->
  </div>
</template>

<script>
export default {
  props: ["item"],
  created() {
    this.total();
    this.totalProduct();
    this.totalProductCount();
  },
  methods: {
    totalProduct() {
      return this.item.get_detail.length;
    },
    totalProductCount() {
      var total = 0;
      this.item.get_detail.map((e) => (total = +total + +e.qty));

      return total;
    },
    total() {
      var total = 0;
      this.item.get_detail.map((e) => (total = +total + +(e.qty * e.price)));
      return total;
    },
    async downloadPDF(id) {
      await this.$axios
        .get(`http://localhost:8000/invoice-pdf/${id}`)
        .then((result) => {
          window.location.href = data["url"];
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style scoped>
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

.products {
  border: 1px solid #c2bcbc;
  padding: 10px;
  margin: 8px;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
    rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
}

.total {
  border: 1px solid #c2bcbc;
  padding: 10px;
  margin: 8px;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
    rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
}
</style>
