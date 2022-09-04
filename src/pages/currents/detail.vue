<template>
  <div>
    <ContentHeader :title="$t('CURRENT')" />

    <div class="row" style="justify-content: end">
      <div class="d-flex justify-content-end">
        <router-link to="/current" class="btn btn-info mr-3"
          ><i class="fa fa-arrow-left mr-2"></i> {{ $t("BACK") }}
        </router-link>
      </div>
    </div>

    <div v-if="isComplete" class="row">
      <div class="col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
        <div class="card mb-3">
          <div class="card-body">
            <div class="form-group">
              <label for="">Başlık</label>
              <input
                type="text"
                name="name"
                id=""
                v-model="item.title"
                class="form-control"
                :placeholder="'Başlık'"
                aria-describedby="helpId"
              />
            </div>
            <div class="form-group">
              <label for="">Miktar</label>
              <input
                type="text"
                name="name"
                id=""
                v-model="item.price"
                class="form-control"
                :placeholder="'Miktar'"
                aria-describedby="helpId"
              />
            </div>
            <div>
              <label for="example-datepicker">Tarih</label>
              <b-form-datepicker
                v-model="item.current_date"
              ></b-form-datepicker>
            </div>
            <div class="form-group">
              <label for="">Açıklama</label>
              <input
                type="text"
                name="name"
                id=""
                v-model="item.desc"
                class="form-control"
                :placeholder="'Açıklama'"
                aria-describedby="helpId"
              />
            </div>
            <div class="form-group">
              <button class="btn btn-info" id="editBtn" @click="update()">
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
  components: { ContentHeader },
  data() {
    return {
      title: this.$t("CURRENT"),
      buttonTitle: this.$t("CURRENT"),
      item: {},
      isComplete: false,
    };
  },
  async created() {
    await this.getCurrentDetail();
    await console.log(this.item);
  },
  methods: {
    async getCurrentDetail() {
      await axios
        .post("/api/current/detail/" + this.$route.params.id)
        .then((result) => {
          this.item = result.data;
          this.isComplete = true;
          console.log(this.item);
        });
    },
    async update() {
      document.getElementById("editBtn").setAttribute("disabled", "");

      await axios
        .post(`/api/current/edit/${this.$route.params.id}`, this.item)
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
