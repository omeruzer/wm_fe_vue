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
                    {{ $t("HELLO") }}, <b>{{ user.name }}</b>
                  </p>
                  <span
                    >{{ $t("SHOP") }}: <b>{{ user.shop_name }}</b></span
                  >
                </div>
              </a>
            </li>
            <hr style="border-top: 1px solid white" />
            <li class="submenu">
              <router-link to="/dashboard" tag="a">
                <i class="fas fa-bars"></i> {{ $t("HOME") }}</router-link
              >
            </li>

            <li class="submenu">
              <router-link to="/invoices" tag="a">
                <i class="fa fa-check"></i> {{ $t("INVOICES") }}
              </router-link>
            </li>
            <li class="submenu">
              <router-link to="/products" tag="a">
                <i class="fa fa-tag"></i> {{ $t("PRODUCTS") }}
              </router-link>
            </li>
            <li class="submenu">
              <router-link to="/categories" tag="a">
                <i class="fas fa-list"></i> {{ $t("CATEGORIES") }}
              </router-link>
            </li>
            <li class="submenu">
              <router-link to="/pattern" tag="a">
                <i class="fa fa-square"></i> {{ $t("PATTERNS") }}
              </router-link>
            </li>
            <li class="submenu">
              <router-link to="/materials" tag="a">
                <i class="fas fa-list"></i> {{ $t("MATERIALS") }}
              </router-link>
            </li>
            <li class="submenu">
              <router-link to="/brands" tag="a">
                <i class="fas fa-copyright"></i> {{ $t("BRANDS") }}
              </router-link>
            </li>
            <li class="submenu">
              <router-link to="/current" tag="a">
                <i class="fa fa-arrow-right-arrow-left"></i> {{ $t("CURRENT") }}
              </router-link>
            </li>
            <li class="submenu">
              <router-link to="/customers" tag="a">
                <i class="fas fa-users"></i> {{ $t("CUSTOMERS") }}
              </router-link>
            </li>
            <li class="submenu">
              <router-link to="/departmans" tag="a">
                <i class="fa-solid fa-people-roof"></i> {{ $t("DEPARTMANS") }}
              </router-link>
            </li>
            <li class="submenu">
              <router-link to="/personels" tag="a"
                ><i class="fa-solid fa-person"></i> {{ $t("PERSONELS") }}
              </router-link>
            </li>
            <li class="submenu">
              <router-link to="/reports" tag="a">
                <i class="fa-solid fa-chart-line"></i> {{ $t("REPORTS") }}
              </router-link>
            </li>
            <li class="submenu">
              <router-link to="/seasons" tag="a">
                <i class="fa fa-list"></i> {{ $t("SEASONS") }}
              </router-link>
            </li>
            <!-- <li class="submenu">
                            <router-link to="/notes" tag="a"> <i class="fas fa-user"></i> Notlar </router-link>
                        </li> -->
            <li class="submenu">
              <router-link to="/settings" tag="a">
                <i class="fa fa-gear"></i> {{ $t("SETTINGS") }}
              </router-link>
            </li>
            <li class="submenu">
              <a @click="logout()" href="#">
                <i class="fa fa-arrow-right-from-bracket"></i>
                {{ $t("LOGOUT") }}
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
    async logout() {
      await axios
        .post("/api/logout")
        .then(async (result) => {
          await localStorage.removeItem("token");
          await localStorage.removeItem("user");
          await this.$router.push("/");
        })
        .catch((err) => {});
    },
  },
};
</script>

<style  scoped>
@import "https://pro.fontawesome.com/releases/v5.10.0/css/all.css";
</style>
