<template>
  <div>
    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
      <div class="card mb-3">
        <div class="card-header">
          <h3><i class="fas fa-chart-bar"></i>Markanın Satış Oranları</h3>
          Son 6 ayda markaların yüzdelik olarak satış oranı
        </div>

        <div class="card-body">
          <pie-chart v-if="load" :data="chartData" :height="100" />
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
import PieChart from "../charts/PieChart.vue";
import Loader from "../Loader.vue";
import axios from 'axios'
export default {
  components: { PieChart,Loader },
  data() {
    return {
      chartData: {},
      load: false,
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    async getData() {
      await axios
        .post("/api/reports/reports-brand")
        .then((result) => {
          this.chartData = {
            labels: result.data.brands,
            datasets: [
              {
                label: "Visualizaciones",
                data: result.data.sell,
                backgroundColor: "rgba(20, 255, 0, 0.3 )",
                borderColor: "rgba(100, 255, 0, 1)",
                borderWidth: 2,
              },
            ],
          };
          this.load = true;
        })
        .catch((err) => {});
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
