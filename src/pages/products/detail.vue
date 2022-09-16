<template>
  <div>
    <ContentHeader :title="title" />

    <div class="row" style="justify-content: end">
      <div class="d-flex justify-content-end">
        <router-link to="/products" class="btn btn-info mr-3"
          ><i class="fa fa-arrow-left mr-2"></i> {{ $t("BACK") }}
        </router-link>
      </div>
    </div>

    <div v-if="isComplete" class="row mt-3">
      <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
        <div class="card mb-3">
          <div class="card-body">
            <div class="row">
              <div class="form-group ml-3">
                <span v-if="item.file == null">{{
                  $t("PRODUCT_IMG_NOT")
                }}</span>
                <div
                  style="
                    width: 150px;
                    height: 200px;
                    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
                    border-radius: 15%;
                  "
                  v-else
                  class=""
                >
                  <img
                    style="
                      width: 100%;
                      height: 200px;
                      box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
                      border-radius: 15%;
                    "
                    :src="'/assets/images/products/' + item.file"
                    alt=""
                    srcset=""
                  />
                </div>
              </div>
              <hr />
              <div class="col-md-12">
                <div class="form-group">
                  <label for=""
                    >{{ $t("PRODUCT_IMG") }} ({{ $t("OPTIONAL") }})</label
                  >
                  <b-form-file type="file" @change="handleFileUpload($event)" />
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                  <label for="">{{ $t("PRODUCT_NAME") }}</label>
                  <input
                    type="text"
                    name="name"
                    id=""
                    v-model="item.name"
                    class="form-control"
                    :placeholder="$t('PRODUCT_NAME')"
                    aria-describedby="helpId"
                    autocomplete="off"
                  />
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                  <label for="">{{ $t("PRODUCT_CODE") }}</label>
                  <input
                    type="text"
                    name="name"
                    id=""
                    v-model="item.code"
                    class="form-control"
                    :placeholder="$t('PRODUCT_CODE')"
                    aria-describedby="helpId"
                    autocomplete="off"
                  />
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                  <label for="">{{ $t("SELECTED_SEASON") }}</label>
                  <select
                    id=""
                    v-model="item.season_id"
                    class="form-control mb-3"
                  >
                    <option
                      v-for="(item, i) in seasons"
                      :key="i"
                      :value="item.id"
                      :selected="item.departman_id == item.id"
                    >
                      {{ item.name }}
                    </option>
                  </select>
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                  <label for="">{{ $t("SELECTED_CATEGORY") }}</label>
                  <select
                    id=""
                    v-model="item.category_id"
                    class="form-control mb-3"
                  >
                    <option
                      v-for="(item, i) in categories"
                      :key="i"
                      :value="item.id"
                      :selected="item.category_id == item.id"
                    >
                      {{ item.name }}
                    </option>
                  </select>
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                  <label for="">{{ $t("SELECTED_BRAND") }}</label>
                  <select
                    id=""
                    v-model="item.brand_id"
                    class="form-control mb-3"
                  >
                    <option
                      v-for="(item, i) in brands"
                      :key="i"
                      :value="item.id"
                      :selected="item.brand_id == item.id"
                    >
                      {{ item.name }}
                    </option>
                  </select>
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                  <label for="">{{ $t("SELECTED_MATERIAL") }}</label>
                  <select
                    id=""
                    v-model="item.material_id"
                    class="form-control mb-3"
                  >
                    <option
                      v-for="(item, i) in materials"
                      :key="i"
                      :value="item.id"
                      :selected="item.material_id == item.id"
                    >
                      {{ item.name }}
                    </option>
                  </select>
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                  <label for="">{{ $t("SELECTED_PATTERN") }}</label>
                  <select
                    id=""
                    v-model="item.pattern_id"
                    class="form-control mb-3"
                  >
                    <option
                      v-for="(item, i) in patterns"
                      :key="i"
                      :value="item.id"
                      :selected="item.pattern_id == item.id"
                    >
                      {{ item.name }}
                    </option>
                  </select>
                </div>
              </div>
              <!-- <div class="col-md-6">
                <div class="form-group">
                  <label for="">{{ $t("PRODUCT_COUNT") }}</label>
                  <input
                    type="text"
                    name="name"
                    id=""
                    v-model="item.qty"
                    class="form-control"
                    :placeholder="$t('PRODUCT_COUNT')"
                    aria-describedby="helpId"
                    autocomplete="off"
                  />
                </div>
              </div> -->
              <div class="col-md-6">
                <div class="form-group">
                  <label for="">{{ $t("PRODUCT_COST") }}</label>
                  <input
                    type="text"
                    name="name"
                    id=""
                    v-model="item.cors"
                    class="form-control"
                    :placeholder="$t('PRODUCT_COST')"
                    aria-describedby="helpId"
                    autocomplete="off"
                  />
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                  <label for="">{{ $t("PRODUCT_PRICE") }}</label>
                  <input
                    type="text"
                    name="name"
                    id=""
                    v-model="item.price"
                    class="form-control"
                    :placeholder="$t('PRODUCT_PRICE')"
                    aria-describedby="helpId"
                    autocomplete="off"
                  />
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                  <label for=""
                    >{{ $t("PRODUCT_CONTENT") }} ({{ $t("OPTIONAL") }})</label
                  >
                  <input
                    type="text"
                    name="name"
                    id=""
                    v-model="item.content"
                    class="form-control"
                    :placeholder="
                      $t('PRODUCT_CONTENT') + '(' + $t('OPTIONAL') + ')'
                    "
                    aria-describedby="helpId"
                    autocomplete="off"
                  />
                </div>
              </div>
            </div>

            <div class="form-group">
              <button
                class="btn btn-info"
                id="editBtn"
                @click="updateProduct()"
              >
                {{ $t("UPDATE") }}
              </button>
            </div>
          </div>
        </div>
        <!-- end card-->
      </div>
    </div>
    <div v-else class="" style="text-align: center">
      <div class="spinner-border" role="status"></div>
    </div>

    <!-- Modal -->
  </div>
</template>

<script>
import ContentHeader from "@/components/shared/ContentHeader";
import axios from "axios";
export default {
  middleware: "auth-admin",
  metaInfo: {
    title: 'asdasd',
    description: "asd",
    htmlAttrs: {
      lang: localStorage.getItem("lang") || "tr",
      amp: true,
    },
    meta: [
      { charset: "utf-8" },
      {
        name: "description",
        content: "An example Vue application with vue-meta.",
      },
      { name: "keywords", content: "work,work managment" },
    ],
  },
  data() {
    return {
      title: this.$t("PRODUCTS"),
      buttonTitle: this.$t("PRODUCT"),
      item: {},
      isComplete: false,
      seasons: [],
      categories: [],
      brands: [],
      materials: [],
      patterns: [],
    };
  },
  components: {
    ContentHeader,
  },
  async created() {
    await this.getProductDetail();
    await this.getSeason();
    await this.getCategory();
    await this.getBrand();
    await this.getMaterial();
    await this.getPattern();
  },
  methods: {
    async handleFileUpload(event) {
      this.item.file = event.target.files[0];
      // this.form.img = formData;
    },
    async getProductDetail() {
      await axios
        .post("/api/product/detail/" + this.$route.params.id)
        .then((result) => {
          this.item = result.data;
          this.isComplete = true;
        });
    },
    async updateProduct() {
      document.getElementById("editBtn").setAttribute("disabled", "");
      let formData = new FormData();
      await formData.append("file", this.item.file);
      await formData.append("name", this.item.name);
      await formData.append("price", this.item.price);
      await formData.append("cors", this.item.cors);
      await formData.append("code", this.item.code);
      await formData.append("qty", this.item.qty);
      await formData.append("content", this.item.content);
      await formData.append("category_id", this.item.category_id);
      await formData.append("pattern_id", this.item.pattern_id);
      await formData.append("brand_id", this.item.brand_id);
      await formData.append("material_id", this.item.material_id);
      await formData.append("season_id", this.item.season_id);
      await axios
        .post(`/api/product/edit/${this.$route.params.id}`, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((result) => {
          this.$swal
            .fire(this.$t("UPDATED"), this.$t("SUCCESS_TEXT"), "success")
            .then((result) => {
              document.getElementById("editBtn").removeAttribute("disabled");
              this.getProductDetail();
            })
            .catch((err) => {});
        });
    },
    async getSeason() {
      await axios
        .post("/api/season")
        .then((result) => {
          this.seasons = result.data;
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
    async getBrand() {
      await axios
        .post("/api/brand")
        .then((result) => {
          this.brands = result.data;
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
    async getPattern() {
      await axios
        .post("/api/pattern")
        .then((result) => {
          this.patterns = result.data;
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
