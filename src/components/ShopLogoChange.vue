<template>
  <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
    <div class="card mb-3">
      <div class="card-header">
        <h3><i class="far fa-check-square"></i> Mağaza Logo</h3>
      </div>
      <div class="card-body">
        <div class="shop-logo my-2" style="width: 20%">
          <img
            style="width: 100%"
            :src="'http://localhost:8000/assets/images/logos/' + logo.shop_logo"
            alt=""
          />
        </div>
        <form @submit.prevent="changeLogo" method="POST">
          <div class="form-group">
            <b-form-file type="file" @change="handleFileUpload($event)" />
          </div>
          <button type="submit" class="btn btn-primary">
            {{ $t("CHANGE") }}
          </button>
        </form>
      </div>
    </div>
    <!-- end card-->
  </div>
</template>

<script>
import axios from "axios";
export default {
  props: { logo: { type: String }, getData: { type: Function } },
  data() {
    return {
      logo: null,
    };
  },
  methods: {
    async handleFileUpload(event) {
      this.logo = event.target.files[0];
      console.log(this.logo);
    },
    async changeLogo() {
      let formData = new FormData();
      await formData.append("shop_logo", this.logo);
      await axios
        .post("/api/shop-logo", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then(async (result) => {
          await this.$swal.fire(
            this.$t("SUCCESS") + "!",
            this.$t("SUCCESS_TEXT"),
            "success"
          );
          this.getData();
        })
        .catch((err) => {});
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
