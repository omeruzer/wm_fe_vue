<template>
  <div class="col-12">
    <div class="card mb-3">
      <div class="card-header">
        <h3><i class="fas fa-user-friends"></i> {{ $t("LAST_INVOICES") }}</h3>
        {{ $t("LAST_INVOICES_TEXT") }}
      </div>
      <div v-if="lastInvoices.length == 0" class="col-md-12 mt-3">
        <isEmptyAlert :buttonTitle="'Fatura'" />
      </div>
      <div v-else class="card-body">
        <div class="table-responsive">
          <div v-if="loaderInvoices">
            <table
              id="dataTable"
              class="table  table-hover display"
              style="width: 100%"
            >
              <thead>
                <tr>
                  <th>#</th>
                  <th>{{ $t("INVOICE_NO") }}</th>
                  <th>{{ $t("CUSTOMER") }}</th>
                  <th>{{ $t("PRODUCT_COUNT") }}</th>
                  <th>{{ $t("INVOICE_AMOUNT") }}</th>
                  <th>{{ $t("INVOICE_DATE") }}</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item, i) in lastInvoices" :key="i">
                  <td style="width: 1px">
                    <div
                      v-if="item.type"
                      v-b-tooltip.hover
                      :title="'Satış'"
                      class="sales-circle"
                    ></div>
                    <div
                      v-else
                      v-b-tooltip.hover
                      :title="'İade'"
                      class="return-circle"
                    ></div>
                  </td>
                  <td>{{ item.invoice_no }}</td>
                  <td>{{ item.get_customer.name }}</td>
                  <td>{{ item.productQty }}</td>
                  <td>{{ item.amount }}₺</td>
                  <td>{{ item.created_at.substr(0, 10) }}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div v-else class="d-flex justify-content-center">
            <Loader />
          </div>
        </div>
        <!-- end table-responsive-->
      </div>
      <!-- end card-body-->
    </div>
    <!-- end card-->
  </div>
</template>

<script>
import Loader from "./Loader.vue";
export default {
  props: ["lastInvoices", "loaderInvoices"],
  components: { Loader },
};
</script>

<style  scoped>
.sales-circle {
  background-color: green;
  width: 10px;
  height: 10px;
  border-radius: 100%;
}

.sales-text {
  color: green;
}

.return-circle {
  background-color: rgb(216, 31, 31);
  width: 10px;
  height: 10px;
  border-radius: 100%;
}

.return-text {
  color: rgb(216, 31, 31);
}
</style>
