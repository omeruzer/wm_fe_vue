<template>
  <div>
    <div class="col-md-12">
      <div class="breadcrumb-holder">
        <div class="row ml-1">
          <h5>{{ $t("FILTER") }}</h5>
        </div>
        <div class="row d-flex justify-content-start align-items-center">
          <div class="col-md-2">
            <div class="form-group mb-3">
              <label for="">{{ $t("INVOICE_NO") }}</label>
              <input
                class="form-control mb-3"
                type="text"
                v-model="filterw.code"
                name=""
                id=""
              />
            </div>
          </div>
          <div class="col-md-2">
            <div class="form-group mb-3">
              <label for="">{{ $t("SELECTED_CUSTOMER") }}</label>
              <select v-model="filterw.customer" class="form-control mb-3">
                <option
                  class=""
                  v-for="(item, i) in customers"
                  :key="i"
                  :value="item.id"
                >
                  {{ item.name }}
                </option>
              </select>
            </div>
          </div>
          <div class="col-md-2">
            <div class="form-group mb-3">
              <label for="">{{ $t("SELECTED_PRICE") }}</label>
              <select id="" v-model="filterw.price" class="form-control mb-3">
                <option value="1">1{{ money }}-50{{ money }}</option>
                <option value="2">50{{ money }}-100{{ money }}</option>
                <option value="3">100{{ money }}-200{{ money }}</option>
                <option value="4">200{{ money }}-500{{ money }}</option>
                <option value="5">500{{ money }}-1000{{ money }}</option>
                <option value="6">1000{{ money }}+</option>
              </select>
            </div>
          </div>
          <div class="col-md-2">
            <div class="form-group mb-3">
              <label for="">{{ $t("SELECTED_INVOICE_TYPE") }}</label>
              <select id="" v-model="filterw.type" class="form-control mb-3">
                <option value="1">{{ $t("SELL") }}</option>
                <option value="2">{{ $t("RETURN") }}</option>
              </select>
            </div>
          </div>
          <div class="col-md-2">
            <div class="form-group mb-3">
              <label for="">{{ $t("INVOICE_DATE") }}</label>
              <select id="" v-model="filterw.date" class="form-control mb-3">
                <option value="1">{{ $t("TODAY") }}</option>
                <option value="2">{{ $t("YESTERDAY") }}</option>
                <option value="3">{{ $t("LAST_7_DAY") }}</option>
                <option value="4">{{ $t("LAST_14_DAY") }}</option>
                <option value="5">{{ $t("LAST_30_DAY") }}</option>
              </select>
            </div>
          </div>
          <div class="col-md-2">
            <button class="btn btn-primary filterButton" @click="filterws">
              {{ $t("FILTER") }}
            </button>
            <button class="btn filterButton" @click="cleanFilter">
              {{ $t("CLEAN") }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  props: ["list"],
  data() {
    return {
      money: JSON.parse(localStorage.getItem("user")).money,

      customers: [],
      filterw: {},
    };
  },
  mounted() {
    this.getCustomer();
  },
  methods: {
    async filterws() {
      await axios
        .post("/api/invoice", this.filterw)
        .then((result) => {
          this.$emit("itemFilter", result.data);
          result.data.links.pop();
          result.data.links.shift();
          this.$emit("itemFilterLinks", result.data.links);
          console.log(this.list);
        })
        .catch((err) => {});
    },
    async getCustomer() {
      await axios
        .post("/api/customer")
        .then((result) => {
          this.customers = result.data;
        })
        .catch((err) => {});
    },
    cleanFilter() {
      this.filterw = {};
      this.filterws();
    },
  },
};
</script>

<style scoped>
</style>
