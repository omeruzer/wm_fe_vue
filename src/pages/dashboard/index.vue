<template>
  <div>
    <div class="main">
      <Header />
      <Sidebar class="sidebar" v-if="sidebarShow" />
      <div class="content-page">
        <div class="content">
          <div class="container-fluid">
            <router-view />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  </div>
</template>

<script>
import Header from "@/components/shared/Header";
import Sidebar from "@/components/shared/Sidebar";
import Footer from "@/components/shared/Footer";
import "../../assets/css/style.css";
export default {
  components: {
    Header,
    Sidebar,
    Footer,
  },
  data() {
    return {
      sidebarShow: true,
    };
  },
  methods: {},
};
</script>

<style >
/* @media screen and (max-width: 600px) {
  .main-sidebar{
    visibility: hidden
  }
} */
</style>
