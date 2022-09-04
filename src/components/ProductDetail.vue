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
              <code>{{ item.code }}</code> - {{ item.name }}
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
              <div class="row" style="justify-content: center">
                <div
                  class="form-group ml-3 d-flex justify-content-start"
                  style="width: 180px"
                >
                  <span v-if="item.file == null">{{
                    $t("PRODUCT_IMG_NOT")
                  }}</span>
                  <img
                    style="
                      width: 100%;
                      height: 200px;
                      box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
                      border-radius: 15%;
                    "
                    v-else
                    :src="
                      'https://bymmc.shop/assets/images/products/' + item.file
                    "
                    alt=""
                    srcset=""
                  />
                </div>
              </div>
              <hr />
              <div class="row">
                <div class="form-group ml-3 d-flex justify-content-start">
                  <label for="">{{ $t("PRODUCT_NAME") }}:</label>
                  <span>{{ item.name }}</span>
                </div>
              </div>
              <div class="row d-flex justify-content-start">
                <div class="form-group ml-3 d-flex justify-content-start">
                  <label for="">{{ $t("PRODUCT_CODE") }}:</label>
                  <span>{{ item.code }}</span>
                </div>
              </div>
              <div class="row d-flex justify-content-start">
                <div class="form-group ml-3 d-flex justify-content-start">
                  <label for="">{{ $t("CATEGORY") }}:</label>
                  <span>{{ item.get_category.name }} </span>
                </div>
              </div>
              <div class="row d-flex justify-content-start">
                <div class="form-group ml-3 d-flex justify-content-start">
                  <label for="">{{ $t("PATTERN") }}:</label>
                  <span>{{ item.get_pattern.name }} </span>
                </div>
              </div>
              <div class="row d-flex justify-content-start">
                <div class="form-group ml-3 d-flex justify-content-start">
                  <label for="">{{ $t("MATERIAL") }}:</label>
                  <span>{{ item.get_material.name }} </span>
                </div>
              </div>
              <div class="row d-flex justify-content-start">
                <div class="form-group ml-3 d-flex justify-content-start">
                  <label for="">{{ $t("BRAND") }}:</label>
                  <span>{{ item.get_brand.name }} </span>
                </div>
              </div>
              <div class="row d-flex justify-content-start">
                <div class="form-group ml-3 d-flex justify-content-start">
                  <label for="">{{ $t("SEASON") }}:</label>
                  <span>{{ item.get_season.name }} </span>
                </div>
              </div>

              <div class="row d-flex justify-content-start">
                <div class="form-group ml-3 d-flex justify-content-start">
                  <label for="">{{ $t("PRODUCT_PRICE") }}:</label>
                  <span>{{ item.price }} {{ money }}</span>
                </div>
              </div>
              <div class="row d-flex justify-content-start">
                <div class="form-group ml-3 d-flex justify-content-start">
                  <label for="">{{ $t("PRODUCT_COST") }}:</label>
                  <span>{{ item.cors }} {{ money }}</span>
                </div>
              </div>
              <div class="row d-flex justify-content-start">
                <div class="form-group ml-3 d-flex justify-content-start">
                  <label for="">{{ $t("ONE_PRODUCT_PER") }}:</label>
                  <span
                    >{{ Math.ceil(item.price - item.cors) }} {{ money }}</span
                  >
                </div>
              </div>
              <div class="row d-flex justify-content-start">
                <div class="form-group ml-3 d-flex justify-content-start">
                  <label for="">{{ $t("TOTAL_PRODUCT_COUNT") }}:</label>
                  <span>{{ item.qty }}</span>
                </div>
              </div>
              <div class="row d-flex justify-content-start">
                <div class="form-group ml-3 d-flex justify-content-start">
                  <label for="">{{ $t("PRODUCT_SELL_COUNT") }}:</label>
                  <span>{{ item.sellCount }}</span>
                </div>
              </div>
              <div class="row d-flex justify-content-start">
                <div class="form-group ml-3 d-flex justify-content-start">
                  <label for="">{{ $t("REMANING_PRODUCT_COUNT") }}:</label>
                  <span>{{ item.qty - item.sellCount }}</span>
                </div>
              </div>
              <div class="row d-flex justify-content-start">
                <div class="form-group ml-3 d-flex justify-content-start">
                  <label for="">{{ $t("TOTAL_PRODUCT_TURNOVER") }}:</label>
                  <span>{{ item.totalSellPrice }} {{ money }}</span>
                </div>
              </div>
              <div class="row d-flex justify-content-start">
                <div class="form-group ml-3 d-flex justify-content-start">
                  <label for="">{{ $t("TOTAL_PRODUCT_PROFIT") }}:</label>
                  <span>{{ item.totalSellProfit }} {{ money }}</span>
                </div>
              </div>
              <div class="row d-flex justify-content-start">
                <div class="form-group ml-3 d-flex justify-content-center">
                  <span v-if="item.content == null">
                    {{ $t("PRODUCT_CONTENT_NOT") }}.
                  </span>
                  <span v-else>{{ item.content }} </span>
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
  </div>
</template>

<script>
export default {
  props: ["item"],
  async mounted() {},
  data() {
    return {
      money: JSON.parse(localStorage.getItem("user")).money,
    };
  },
  methods: {},
};
</script>

<style  scoped>
.modals {
  width: 100%;
}
</style>
