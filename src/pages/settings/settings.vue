<template>
  <div>
    <ContentHeader :title="title" />
    <div v-if="load">
      <div class="row">
        <ShopSetting :user="userInfo" />
        <PasswordChanged />
        <ShopLogoChange :logo="userInfo" :getData="getUser" />
      </div>
    </div>
    <div v-else class="d-flex justify-content-center">
      <Loader />
    </div>
  </div>
</template>

<script>
import ContentHeader from "@/components/shared/ContentHeader";
import ShopSetting from "../../components/ShopSetting.vue";
import PasswordChanged from "../../components/PasswordChanged.vue";
import ShopLogoChange from "../../components/ShopLogoChange.vue";
import axios from 'axios'
export default {
  middleware: "auth-admin",
  data() {
    return {
      title: this.$t("SETTINGS"),
      load: false,
      userInfo: {},
    };
  },
  components: {
    ContentHeader,
    ShopSetting,
    PasswordChanged,
    ShopLogoChange,
  },
  created() {
    this.getUser();
  },
  methods: {
    async getUser() {
      await axios
        .get("/api/user")
        .then((result) => {
          this.userInfo = result.data;
          this.load = true;
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
