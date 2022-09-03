<template>
  <div>
    <!-- Left Sidebar -->
    <div class="left main-sidebar" id="main-sidebar">
      <div class="sidebar-inner leftscroll">
        <div id="sidebar-menu">
          <ul>
            <hr style="border-top: 1px solid white" />
            <li class="submenu">
              <a href="#">
                <div class="ml-2">
                  <p>
                    Merhaba, <b>{{ user.name }}</b>
                  </p>
                  <span
                    >Mağaza: <b>{{ user.shop_name }}</b></span
                  >
                </div>
              </a>
            </li>
            <hr style="border-top: 1px solid white" />
            <li class="submenu">
              <router-link to="/dashboard" tag="a">
                <i class="fas fa-bars"></i> Anasayfa</router-link
              >
            </li>

            <li class="submenu">
              <router-link to="/invoices" tag="a">
                <i class="fa fa-check"></i> Faturalar
              </router-link>
            </li>
            <li class="submenu">
              <router-link to="/products" tag="a">
                <i class="fa fa-tag"></i>Ürünler
              </router-link>
            </li>
            <li class="submenu">
              <router-link to="/categories" tag="a">
                <i class="fas fa-list"></i> Kategoriler
              </router-link>
            </li>
            <li class="submenu">
              <router-link to="/pattern" tag="a">
                <i class="fa fa-square"></i> Kalıplar
              </router-link>
            </li>
            <li class="submenu">
              <router-link to="/materials" tag="a">
                <i class="fas fa-list"></i> Kumaşlar
              </router-link>
            </li>
            <li class="submenu">
              <router-link to="/brands" tag="a">
                <i class="fas fa-copyright"></i> Markalar
              </router-link>
            </li>
            <li class="submenu">
              <router-link to="/current" tag="a">
                <i class="fa fa-arrow-right-arrow-left"></i> Gelir Gider
              </router-link>
            </li>
            <li class="submenu">
              <router-link to="/customers" tag="a">
                <i class="fas fa-users"></i> Müşteriler
              </router-link>
            </li>
            <li class="submenu">
              <router-link to="/departmans" tag="a">
                <i class="fa-solid fa-people-roof"></i> Departmanlar
              </router-link>
            </li>
            <li class="submenu">
              <router-link to="/personels" tag="a"
                ><i class="fa-solid fa-person"></i> Personeller
              </router-link>
            </li>
            <!-- <li class="submenu">
              <router-link to="/reports" tag="a">
                <i class="fa-solid fa-chart-line"></i> Raporlar
              </router-link>
            </li> -->
            <li class="submenu">
              <router-link to="/seasons" tag="a">
                <i class="fa fa-list"></i> Sezonlar
              </router-link>
            </li>
            <!-- <li class="submenu">
                            <router-link to="/notes" tag="a"> <i class="fas fa-user"></i> Notlar </router-link>
                        </li> -->
            <li class="submenu">
              <router-link to="/settings" tag="a">
                <i class="fa fa-gear"></i> Ayarlar
              </router-link>
            </li>
            <li class="submenu">
              <a @click="logout()" href="#">
                <i class="fa fa-arrow-right-from-bracket"></i>
                Çıkış yap
              </a>
            </li>
          </ul>

          <div class="clearfix"></div>
        </div>

        <div class="clearfix"></div>
      </div>
    </div>
    <!-- End Sidebar -->
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      user: JSON.parse(localStorage.getItem("user")),
    };
  },
  methods: {
    logout() {
      axios
        .post("/api/logout")
        .then((result) => {
          localStorage.clear();
          this.$router.push("/");
          console.log(result.data);
        })
        .catch((err) => {});
      // this.$auth
      //   .logout()
      //   .then((result) => {
      //     this.$router.push("/");
      //   })
      //   .catch((err) => {
      //     console.log(err);
      //   });
    },
  },
};
</script>

<style  scoped>
@import "https://pro.fontawesome.com/releases/v5.10.0/css/all.css";
</style>
