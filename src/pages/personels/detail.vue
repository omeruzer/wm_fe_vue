<template>
  <div>
    <ContentHeader :title="$t('PERSONELS')" />

    <div class="row" style="justify-content: end">
      <div class="d-flex justify-content-end">
        <router-link to="/personels" class="btn btn-info mr-3"
          ><i class="fa fa-arrow-left mr-2"></i> {{ $t("BACK") }}
        </router-link>
      </div>
    </div>

    <div v-if="isComplete" class="row">
      <div class="col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
        <div class="card mb-3">
          <div class="card-body">
            <div class="form-group">
              <label for="">{{ $t("PERSONEL_NAME") }}</label>
              <input
                type="text"
                name="name"
                id=""
                v-model="item.name"
                class="form-control"
                :placeholder="$t('PERSONEL_NAME')"
                aria-describedby="helpId"
              />
            </div>
            <div class="form-group">
              <label for="">{{ $t("DEPARTMAN") }}</label>
              <select v-model="item.departman_id" class="form-control" id="">
                <option
                  v-for="(value, i) in departmans"
                  :key="i"
                  :value="value.id"
                  :selected="item.departman_id == value.id"
                >
                  {{ value.name }}
                </option>
              </select>
            </div>
            <div class="form-group">
              <button
                class="btn btn-info"
                id="editBtn"
                @click="updatePersonel()"
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
      title: this.$t("PERSONELS"),
      buttonTitle: this.$t("PERSONEL"),
      item: {},
      isComplete: false,
      departmans: [],
    };
  },
  components: {
    ContentHeader,
  },
  async created() {
    await this.getPersonelDetail();
    await this.getDepartmans();
    console.log(this.departmans);
  },
  methods: {
    async getPersonelDetail() {
      await axios
        .post("/api/personel/detail/" + this.$route.params.id)
        .then((result) => {
          this.item = result.data;
          this.isComplete = true;
        });
    },
    async updatePersonel() {
      document.getElementById("editBtn").setAttribute("disabled", "");

      await axios
        .post(`/api/personel/edit/${this.$route.params.id}`, this.item)
        .then((result) => {
          this.$swal
            .fire(this.$t("UPDATED"), this.$t("SUCCESS_TEXT"), "success")
            .then((result) => {
              document.getElementById("editBtn").removeAttribute("disabled");
            })
            .catch((err) => {});
        });
    },
    async getDepartmans() {
      await axios
        .post("/api/departman")
        .then((result) => {
          this.departmans = result.data;
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
