<template>
  <div>
    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
      <div class="card mb-3">
        <div class="card-header">
          <h3><i class="fas fa-chart-bar"></i>Günlük Satış-İade Raporu</h3>
          Son 30 Günde Satış-İade Raporları
        </div>

        <div class="card-body">
          <LineChart v-if="load" :data="chartData" :height="100" />
          <div v-else class="d-flex justify-content-center">
            <Loader />
          </div>
          <!-- <DailySellChart v-if="loader" :data="chartData" :height="200" /> -->
          <!-- <div  class="d-flex justify-content-center">
            <Loader />
          </div> -->
        </div>
      </div>
      <!-- end card-->
    </div>
  </div>
</template>

<script>
import LineChart from "../charts/LineChart.vue";
import Loader from "../Loader.vue";
import axios from "axios";
export default {
  components: { LineChart, Loader },
  data() {
    return {
      chartData: {},
      load: false,
    };
  },
  mounted() {
    this.getDaily();
  },
  methods: {
    async getDaily() {
      await axios
        .post("/api/reports/reports-sell-return-daily")
        .then((result) => {
          console.log(result.data);
          this.load = true;
          this.period = result.data.sell.period;
          this.sellData = result.data.sell.data;
          this.returnData = result.data.return.data;
          this.chartData = {
            labels: this.period,
            datasets: [
              {
                label: this.$t("SELL"),
                backgroundColor: ["rgba(0, 255, 0, 0.3)"],
                fill: true,
                data: this.sellData,
              },
              {
                label: this.$t("RETURN"),
                backgroundColor: "rgba(255, 0, 0, 0.3)",
                fill: true,
                data: this.returnData,
              },
            ],
          };
        })
        .catch((err) => {});
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
