<template>
  <div>
    <ContentHeader :title="$t('HOME')" />
    <HomeItems :item="homeItems" :loader="loader" />
    <!-- end row -->

    <div class="row">
      <DailySell />
      <MounthlySell />
    </div>
    <!-- end row -->

    <div class="row">
      <TopCustomer :item="topCustomer" :loaderCustomer="loaderCustomer" />

      <HomeProduct :item="homeProduct" :loaderProduct="loaderProduct" />

      <LastInvoices
        :lastInvoices="lastInvoices"
        :loaderInvoices="loaderInvoices"
      />
    </div>
    <!-- end row-->
  </div>
</template>

<script>
import axios from "axios";
import ContentHeader from "@/components/shared/ContentHeader";
import HomeItems from "../../components/HomeItems.vue";
import HomeProduct from "../../components/HomeProduct.vue";
import TopCustomer from "../../components/TopCustomer.vue";
import DailySell from "../../components/DailySell.vue";
import MounthlySell from "../../components/MounthlySell.vue";
import LastInvoices from "../../components/LastInvoices.vue";
export default {
  middleware: "auth-admin",

  data() {
    return {
      title: this.$t('HOME'),
      homeItems: {},
      homeProduct: {},
      topCustomer: {},
      lastInvoices: [],
      loader: false,
      loaderCustomer: false,
      loaderProduct: false,
      loaderInvoices: false,
    };
  },
  components: {
    ContentHeader,
    HomeItems,
    HomeProduct,
    TopCustomer,
    DailySell,
    MounthlySell,
    LastInvoices,
  },
  created() {
    this.getHomeItems();
    this.getProductItems();
    this.getTopCustomer();
    this.getLastInvoices();
  },
  methods: {
    async getHomeItems() {
      await axios
        .post("/api/statistic/item-count")
        .then((result) => {
          this.homeItems = result.data;
          this.loader = true;
        })
        .catch((err) => {});
    },
    async getProductItems() {
      await axios
        .post("/api/statistic/declining-product-stock")
        .then((result) => {
          this.homeProduct = result.data;
          this.loaderProduct = true;
        })
        .catch((err) => {});
    },
    async getTopCustomer() {
      await axios
        .post("/api/statistic/top-customer")
        .then((result) => {
          this.topCustomer = result.data;
          this.loaderCustomer = true;
        })
        .catch((err) => {});
    },
    async getLastInvoices() {
      await axios
        .post("/api/statistic/last-invoices")
        .then((result) => {
          this.lastInvoices = result.data;
          this.loaderInvoices = true;
        })
        .catch((err) => {});
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
