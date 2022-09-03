<template>
  <div class="col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
    <div class="card mb-3">
      <div class="card-header">
        <h3>
          <i class="fas fa-envelope"></i> {{ $t("OUT_OF_STOCK_PRODUCTS") }}
        </h3>
        {{ $t("OUT_OF_STOCK_PRODUCTS_TEXT") }}.
      </div>
      <div class="card-body">
        <div
          class="widget-messages nicescroll"
          style="height: 550px; overflow-y: scroll"
        >
          <div v-if="loaderProduct">
            <div v-if="item.length > 0" class="">
              <div v-for="(item, i) in item" :key="i" class="message-item">
                <div
                  class="d-flex justify-content-between align-items-end px-5"
                >
                  <div class="">
                    <p class="message-item-user">{{ item.code }}</p>
                    <p class="message-item-msg">{{ item.name }}</p>
                  </div>
                  <div class="">
                    <p :class="[item.qty < 10 ? errorClass : warningClass]">
                      {{ item.end_qty }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="" v-else>
              <div
                class="
                  d-flex
                  justify-content-center
                  align-items-center
                  border
                  pt-3
                "
              >
                <p>{{ $t("NOTING_OUT_STOCK") }}</p>
              </div>
            </div>
          </div>
          <div v-else class="d-flex justify-content-center">
            <Loader />
          </div>
        </div>
      </div>
      <!-- end card-->
    </div>
  </div>
</template>

<script>
import Loader from "./Loader.vue";
export default {
  props: ["item", "loaderProduct"],
  data() {
    return {
      errorClass: "text-danger",
      warningClass: "text-warning",
    };
  },
  components: { Loader },
};
</script>

<style lang="scss" scoped>
</style>
