<template>
  <div>
    <div class="row">
      <div class="col-xs-12 col-md-6 col-lg-6 col-xl-3">
        <div class="card-box noradius noborder bg-danger">
          <h6 class="text-white text-uppercase m-b-20">{{ $t("TODAY") }}</h6>
          <h1 v-if="loader" class="m-b-20 text-white counter">
            {{ moneyFormat(item.today_total_sell).substr(1)
            }}₺
          </h1>
          <Loader v-else />
          <span class="text-white">{{ $t("SELL") }}</span>
        </div>
      </div>

      <div class="col-xs-12 col-md-6 col-lg-6 col-xl-3">
        <div class="card-box noradius noborder bg-purple">
          <h6 class="text-white text-uppercase m-b-20">{{ $t("TODAY") }}</h6>
          <h1 v-if="loader" class="m-b-20 text-white counter">
            {{ moneyFormat(item.today_total_return).substr(1)
            }}₺
          </h1>
          <Loader v-else />

          <span class="text-white">{{ $t("RETURN") }}</span>
        </div>
      </div>

      <div class="col-xs-12 col-md-6 col-lg-6 col-xl-3">
        <div class="card-box noradius noborder bg-warning">
          <h6 class="text-white text-uppercase m-b-20">
            {{ $t("LAST_30_DAY") }}
          </h6>
          <h1 v-if="loader" class="m-b-20 text-white counter">
            {{ moneyFormat(item.last_mount_total_sell).substr(1)
            }}₺
          </h1>
          <Loader v-else />
          <span class="text-white">{{ $t("SELL") }}</span>
        </div>
      </div>

      <div class="col-xs-12 col-md-6 col-lg-6 col-xl-3">
        <div class="card-box noradius noborder bg-info">
          <h6 class="text-white text-uppercase m-b-20">
            {{ $t("LAST_30_DAY") }}
          </h6>
          <h1 v-if="loader" class="m-b-20 text-white counter">
            {{ moneyFormat(item.last_mount_total_return).substr(1)
            }}₺
          </h1>
          <Loader v-else />
          <span class="text-white">{{ $t("RETURN") }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Loader from "./Loader.vue";
export default {
  props: ["item", "loader"],
  methods: {
    moneyFormat(number) {
      var formatter = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      });
      return formatter.format(number);
    },
  },
  components: { Loader },
};
</script>

<style lang="scss" scoped>
</style>
