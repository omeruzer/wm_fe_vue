<template>
  <div>
    <ContentHeader :title="title" />
    <div class="row">
      <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
        <div class="row">
          <div class="col-md-12">
            <!-- <report-crads /> -->
          </div>
        </div>
        <div class="row">
          <div class="col-md-12">
            <sell-return />
          </div>
          <div class="col-md-12">
            <mounth-sell-return />
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
        <div class="row">
          <div class="col-md-6">
            <brand-report />
          </div>
          <div class="col-md-6">
            <category-report />
          </div>
        </div>
        <div class="row">
          <div class="col-md-6">
            <pattern-report />
          </div>
          <div class="col-md-6">
            <material-report />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ContentHeader from "@/components/shared/ContentHeader";
import BrandReport from "../../components/reports/BrandReport.vue";
import CategoryReport from "../../components/reports/CategoryReport.vue";
import PatternReport from "../../components/reports/PatternReport.vue";
import MaterialReport from "../../components/reports/MaterialReport.vue";
import SellReturn from "../../components/reports/DailySellReturn.vue";
import MounthSellReturn from "../../components/reports/MounthSellReturn.vue";
import ReportCrads from "../../components/reports/ReportCrads.vue";
export default {
  middleware: "auth-admin",

  data() {
    return {
      title: this.$t("REPORTS"),
    };
  },
  components: {
    ContentHeader,
    BrandReport,
    CategoryReport,
    PatternReport,
    MaterialReport,
    SellReturn,
    MounthSellReturn,
    ReportCrads,
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
