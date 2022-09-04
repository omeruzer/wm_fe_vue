<template>
  <div class="col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
    <div class="card mb-3">
      <div class="card-header">
        <h3><i class="fas fa-history"></i> {{ $t("TOP_SELLING_CUSTOMER") }}</h3>
        {{ $t("TOP_SELLING_CUSTOMER_TEXT") }}.
      </div>

      <div class="card-body">
        <div
          class="widget-messages nicescroll"
          style="height: 550px; overflow-y: scroll"
        >
          <div v-if="loaderCustomer">
            <div v-if="item.customers && item.customers.lenght > 0" class="">
              <div v-for="(item, i) in item.customers" :key="i" class="">
                <div v-if="item.orderCount > 0">
                  <div
                    class="
                      d-flex
                      justify-content-between
                      align-item-center
                      border
                      px-4
                      pt-3
                      mb-2
                    "
                  >
                    <div class="">
                      <p class="message-item-user">{{ item.name }}</p>
                    </div>
                    <div class="">
                      <p class="">
                        {{ item.orderCount }} {{ $t("PIECE_SALE") }}
                      </p>
                    </div>
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
                <p>{{ $t("NOTING_SELL_CUSTOMER") }}</p>
              </div>
            </div>
          </div>
          <div v-else class="d-flex justify-content-center">
            <Loader />
          </div>
        </div>
      </div>
    </div>
    <!-- end card-->
  </div>
</template>

<script>
import Loader from "./Loader.vue";
export default {
  props: ["item", "loaderCustomer"],
  components: { Loader },
};
</script>

<style lang="scss" scoped>
</style>
