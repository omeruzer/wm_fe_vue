<!-- <template>
  <div class="">
    <LineChartGenerator v-if="loader" :chart-options="chartOptions" :chart-data="chartData" :chart-id="chartId"
      :dataset-id-key="datasetIdKey" :plugins="plugins" :css-classes="cssClasses" :styles="styles" :width="width"
      :height="height" />
    <div v-else class="d-flex justify-content-center">
      <Loader />
    </div>
  </div>
</template>

<script>
import { Line as LineChartGenerator } from 'vue-chartjs'

import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  LineElement,
  LinearScale,
  CategoryScale,
  PointElement
} from 'chart.js'
import Loader from './Loader.vue';

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  LineElement,
  LinearScale,
  CategoryScale,
  PointElement
)

export default {
  name: 'LineChart',
  components: {
    LineChartGenerator,
    Loader
  },

  props: {
    chartId: {
      type: String,
      default: 'line-chart'
    },
    period: {
      type: Array,
      default: () => []
    },
    sellData: {
      type: Array,
      default: () => []
    },
    returnData: {
      type: Array,
      default: () => []
    },
    datasetIdKey: {
      type: String,
      default: 'label'
    },
    width: {
      type: Number,
      default: 400
    },
    height: {
      type: Number,
      default: 400
    },
    cssClasses: {
      default: '',
      type: String
    },
    styles: {
      type: Object,
      default: () => { }
    },
    plugins: {
      type: Array,
      default: () => []
    },
    loader: {
      type: Boolean
    }
  },
  data() {
    return {
      chartData: {
        labels: this.period,
        datasets: [
          {
            label: 'Satış',
            backgroundColor: '#008000',
            data: this.sellData
          },
          {
            label: 'İade',
            backgroundColor: '#D81F1F',
            data: this.returnData
          },
        ]
      },
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false
      }
    }
  }
}
</script> -->
<script>
import { Line } from "vue-chartjs";

export default {
  extends: Line,
  props: ["data", "options"],
  mounted() {
    this.renderChart(this.data, this.options);
  },
};
</script>
