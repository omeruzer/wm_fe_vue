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
              <label for="">{{ $t("PRODUCT_NAME") }}</label>
              <input
                class="form-control mb-3"
                type="text"
                v-model="filterw.name"
                name=""
                id=""
              />
            </div>
          </div>
          <div class="col-md-2">
            <div class="form-group mb-3">
              <label for="">{{ $t("PRODUCT_CODE") }}</label>
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
              <label for="">{{ $t("SELECTED_BRAND") }}</label>
              <select v-model="filterw.brand" class="form-control mb-3">
                <option
                  class=""
                  v-for="(item, i) in brands"
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
              <label for="">{{ $t("SELECTED_SEASON") }}</label>
              <select id="" v-model="filterw.season" class="form-control mb-3">
                <option
                  class=""
                  v-for="(item, i) in season"
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
              <label for="">{{ $t("SELECTED_CATEGORY") }}</label>
              <select
                id=""
                v-model="filterw.category"
                class="form-control mb-3"
              >
                <option
                  class=""
                  v-for="(item, i) in categories"
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
              <label for="">{{ $t("SELECTED_PATTERN") }}</label>
              <select id="" v-model="filterw.pattern" class="form-control mb-3">
                <option
                  class=""
                  v-for="(item, i) in patterns"
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
              <label for="">{{ $t("SELECTED_MATERIAL") }}</label>
              <select
                id=""
                v-model="filterw.material"
                class="form-control mb-3"
              >
                <option
                  class=""
                  v-for="(item, i) in materials"
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
              <label for="">{{ $t("SELECTED_IMG") }}</label>
              <select id="" v-model="filterw.img" class="form-control mb-3">
                <option value="1">{{ $t("HAS_IMG") }}</option>
                <option value="2">{{ $t("NOT_IMG") }}</option>
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

      brands: [],
      categories: [],
      patterns: [],
      materials: [],
      season: [],
      filterw: {},
    };
  },
  mounted() {
    this.getBrand();
    this.getSeason();
    this.getCategory();
    this.getPattern();
    this.getMaterial();
  },
  methods: {
    async filterws() {
      await axios
        .post("/api/product", this.filterw)
        .then((result) => {
          this.$emit("itemFilter", result.data);
          result.data.links.pop();
          result.data.links.shift();
          this.$emit("itemFilterLinks", result.data.links);
          console.log(this.list);
        })
        .catch((err) => {});
    },
    async getBrand() {
      await axios
        .post("/api/brand")
        .then((result) => {
          this.brands = result.data;
        })
        .catch((err) => {});
    },
    async getPattern() {
      await axios
        .post("/api/pattern")
        .then((result) => {
          this.patterns = result.data;
        })
        .catch((err) => {});
    },
    async getMaterial() {
      await axios
        .post("/api/material")
        .then((result) => {
          this.materials = result.data;
        })
        .catch((err) => {});
    },
    async getCategory() {
      await axios
        .post("/api/category")
        .then((result) => {
          this.categories = result.data;
        })
        .catch((err) => {});
    },
    async getSeason() {
      await axios
        .post("/api/season")
        .then((result) => {
          this.season = result.data;
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
