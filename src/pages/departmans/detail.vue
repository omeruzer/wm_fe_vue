<template>
  <div>
    <ContentHeader :title="$t('DEPARTMANS')" />

    <div class="row" style="justify-content: end">
      <div class="d-flex justify-content-end">
        <router-link to="/departmans" class="btn btn-info mr-3"
          ><i class="fa fa-arrow-left mr-2"></i> {{ $t("BACK") }}
        </router-link>
      </div>
    </div>

    <div v-if="isComplete" class="row">
      <div class="col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
        <div class="card mb-3">
          <div class="card-body">
            <div class="form-group">
              <label for="">{{ $t("DEPARTMAN") }}</label>
              <input
                type="text"
                name="name"
                id=""
                v-model="item.name"
                class="form-control"
                :placeholder="$t('DEPARTMAN')"
                aria-describedby="helpId"
              />
            </div>
            <div class="form-group">
              <button
                class="btn btn-info"
                id="editBtn"
                @click="updateDepartman()"
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

  data() {
    return {
      title: this.$t("DEPARTMANS"),
      buttonTitle: this.$t("DEPARTMAN"),
      item: {},
      isComplete: false,
    };
  },
  components: {
    ContentHeader,
  },
  async created() {
    await this.getDepartmanDetail();
    await console.log(this.item);
  },
  methods: {
    async getDepartmanDetail() {
      await axios
        .post("/api/departman/detail/" + this.$route.params.id)
        .then((result) => {
          this.item = result.data;
          this.isComplete = true;
          console.log(this.item);
        });
    },
    async updateDepartman() {
      document.getElementById("editBtn").setAttribute("disabled", "");

      await axios
        .post(`/api/departman/edit/${this.$route.params.id}`, this.item)
        .then((result) => {
          this.$swal
            .fire(this.$t("UPDATED"), this.$t("SUCCESS_TEXT"), "success")
            .then((result) => {
              document.getElementById("editBtn").removeAttribute("disabled");
            })
            .catch((err) => {});
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


<style lang="scss" scoped>
</style>
