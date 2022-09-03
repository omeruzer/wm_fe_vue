<template>
  <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-6">
    <div class="card mb-3">
      <div class="card-header">
        <h3><i class="fas fa-chart-bar"></i> {{$t('DAILY_SELL')}}</h3>
        {{$t('LAST_15_DAY_SALES_AND_RETURN_GRAPH')}}
      </div>

      <div class="card-body">
        <DailySellChart v-if="loader" :data="chartData" :height="200" />
        <div v-else class="d-flex justify-content-center">
          <Loader />
        </div>
      </div>
    </div>
    <!-- end card-->
  </div>
</template>

<script>
import DailySellChart from './DailySellChart';
export default {
  components: { DailySellChart },
  data() {
    return {
      sellData: [],
      period: [],
      returnData: [],
      loader: false,
      chartData: {}
    }
  },
  created() {
    this.getDaily()
  },
  methods: {
    async getDaily() {
      await this.$axios.post('http://localhost:8000/api/statistic/daily-sell')
        .then((result) => {
          this.period = result.data.sell.period
          this.sellData = result.data.sell.data
          this.returnData = result.data.return.data
          this.loader = true
          this.chartData={
            labels: this.period,
            datasets: [
              {
                label: this.$t('SELL'),
                backgroundColor: 'rgba(0, 255, 0, 0.3)',
                fill: true,
                data: this.sellData
              },
              {
                label:this.$t('RETURN'),
                backgroundColor: 'rgba(255, 0, 0, 0.3)',
                fill:true,
                data: this.returnData
              },
            ]
          }
        }).catch((err) => {

        });
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
