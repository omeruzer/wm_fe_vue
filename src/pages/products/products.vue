<template>
  <div>
    <ContentHeader :title="title" />
    <div v-if="isComplete">
      <ItemFilter
        @itemFilter="list = $event"
        @itemFilterLinks="links = $event"
        :list="list"
      />
      <Buttons :buttonTitle="buttonTitle" @refreshData="list = $event" />
      <div v-if="list.length == 0" class="col-md-12">
        <isEmptyAlert :buttonTitle="buttonTitle" />
      </div>
      <div v-else class="col-md-12">
        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
          <div class="card mb-3">
            <div class="card-body">
              <div v-if="loadPage" class="table-responsive">
                <table
                  id="example1"
                  class="table table-hover display"
                >
                  <thead>
                    <tr>
                      <th>{{ $t("PRODUCT_NAME") }}</th>
                      <th>{{ $t("PRODUCT_CODE") }}</th>
                      <th>{{ $t("CATEGORY") }}</th>
                      <th>{{ $t("PATTERN") }}</th>
                      <th>{{ $t("MATERIAL") }}</th>
                      <th>{{ $t("BRAND") }}</th>
                      <th>{{ $t("SEASON") }}</th>
                      <th>{{ $t("PRICE") }}</th>
                      <th>{{ $t("TRANSACTIONS") }}</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(item, i) in list.data" :key="i">
                      <td>{{ item.name }}</td>
                      <td>{{ item.code }}</td>
                      <td>{{ item.get_category.name }}</td>
                      <td>{{ item.get_pattern.name }}</td>
                      <td>{{ item.get_material.name }}</td>
                      <td>{{ item.get_brand.name }}</td>
                      <td>{{ item.get_season.name }}</td>
                      <td>
                        <div class="" style="display: flex">
                          <span>{{ item.price }}</span>
                          <span>₺</span>
                        </div>
                      </td>
                      <td>
                        <div class="" style="display: flex">
                          <button
                            @click="getDetail(item.id)"
                            class="btn btn-info mr-2"
                          >
                            <i class="fa fa-eye"></i>
                          </button>
                          <router-link
                            :to="'/products/'+item.id"
                          >
                            <button
                              class="btn btn-warning mr-2"
                            >
                              <i class="fa fa-edit"></i>
                            </button>
                          </router-link>
                          <button
                            @click="remove(item.id)"
                            class="btn btn-danger"
                          >
                            <i class="fa fa-trash"></i>
                          </button>
                        </div>
                      </td>
                      <ProductDetail :item="item" />
                    </tr>
                  </tbody>
                </table>
              </div>
              <div v-else class="d-flex justify-content-center">
                <Loader />
              </div>
              <nav
                v-if="links.length > 1"
                class="d-flex justify-content-center"
                aria-label="Page navigation example"
              >
                <ul class="pagination">
                  <li v-for="(item, i) in links" :key="i" class="page-item">
                    <a class="page-link" @click="getProducts(i + 1)">{{
                      item.label
                    }}</a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          <!-- end card-->
        </div>
      </div>
    </div>
    <div v-else class="" style="text-align: center">
      <div class="spinner-border" role="status"></div>
    </div>
  </div>
</template>

<script>
import ContentHeader from "@/components/shared/ContentHeader";
import ItemFilter from "../../components/filter/ProductFilter.vue";
import Loader from "../../components/Loader.vue";
import Buttons from "../../components/Buttons.vue";
import ProductDetail from "../../components/ProductDetail.vue";
import axios from "axios";
export default {
  middleware: "auth-admin",

  data() {
    return {
      links: null,
      title: this.$t("PRODUCTS"),
      buttonTitle: this.$t("PRODUCT"),
      list: null,
      item: null,
      loadPage: false,
      isComplete: false,
    };
  },
  components: {
    ContentHeader,
    ItemFilter,
    Loader,
    Buttons,
    ProductDetail
  },
  mounted() {
    this.getProducts();
  },
  methods: {
    async getProducts(page = 1) {
      this.loadPage = false;
      await axios
        .post("/api/product?page=" + page, this.filter)
        .then((result) => {
          this.list = result.data;
          result.data.links.pop();
          result.data.links.shift();
          this.links = result.data.links;
          this.loadPage = true;
          this.isComplete = true;
          console.log(this.list);
        })
        .catch((err) => {});
    },
    async getDetail(id) {
      await axios
        .post("/api/product/detail/" + id)
        .then((result) => {
          this.item = result.data;
          $("#exampleModal-" + id).modal("show");
        });
    },
    async remove(id) {
      this.$swal
        .fire({
          title: this.$t("DELETED_CONFIRM") + "?",
          text: this.$t("DELETED_TEXT"),
          icon: "Warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: this.$t("DELETE_YES"),
        })
        .then(async (result) => {
          if (result.value) {
            await axios
              .post("/api/product/remove/" + id)
              .then(async (result) => {
                await this.$store.dispatch("LIST", "product");
                this.item = result.data;
                console.log(this.item);
                this.$swal
                  .fire(
                    this.$t("DELETED") + "!",
                    this.$t("SUCCESS_TEXT"),
                    "success"
                  )
                  .then(async (result) => {
                    await setTimeout(async () => {
                      this.list = await this.$store.state.list;
                    }, 1500);
                  })
                  .catch((err) => {});
              })
              .catch((err) => {});
          }
        });
    },
  },
  head() {
    return {
      title: this.title,
    };
  },
};
</script>

<style scoped>
</style>
