<template>
  <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
    <div class="card mb-3">
      <div class="card-header">
        <h3><i class="far fa-check-square"></i> {{ $t("SHOP_SETTINGS") }}</h3>
      </div>
      <div class="card-body">
        <form method="POST" @submit.prevent="update()">
          <div class="form-group">
            <label for="">{{ $t("SHOP_OWNER") }}</label>
            <input
              type="text"
              class="form-control"
              id="exampleInputEmail1"
              :placeholder="$t('SHOP_OWNER')"
              v-model="user.name"
              required
            />
          </div>
          <div class="form-group">
            <label for="">{{ $t("SHOP_NAME") }}</label>
            <input
              type="text"
              class="form-control"
              id="exampleInputEmail1"
              :placeholder="$t('SHOP_NAME')"
              v-model="user.shop_name"
              required
            />
          </div>
          <div class="form-group">
            <label for="">{{ $t("SHOP_ADDRESS") }}</label>
            <input
              type="text"
              class="form-control"
              id="exampleInputEmail1"
              :placeholder="$t('SHOP_ADDRESS')"
              v-model="user.shop_address"
              required
            />
          </div>
          <div class="form-group">
            <label for="">{{ $t("PHONE_NUMBER") }}</label>
            <input
              type="number"
              class="form-control"
              id="exampleInputEmail1"
              :placeholder="$t('PHONE_NUMBER')"
              v-model="user.phone"
              required
            />
          </div>
          <div class="form-group">
            <label for="">{{ $t("E-MAIL") }}</label>
            <input
              type="text"
              class="form-control"
              id="exampleInputEmail1"
              :placeholder="$t('E-MAIL')"
              v-model="user.email"
              required
            />
          </div>

          <div class="form-group">
            <label for="">Para Birimi</label>
            <select name="" v-model="user.money" class="form-control" id="">
              <option value="???">T??rk Liras?? (???)</option>
              <option value="$">Amerikan Dolar?? ($)</option>
              <option value="???">Euro (???)</option>
              <option value="??">??ngiliz Sterlini (??)</option>
              <option value="??">Japon Yeni (??)</option>
              <option value="???">Rus Rublesi (???)</option>
            </select>
          </div>
          <button type="submit" class="btn btn-primary">
            {{ $t("SAVE") }}
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
  props: ["user"],
  data() {
    return {
      money: JSON.parse(localStorage.getItem("user")).money,
    };
  },
  methods: {
    update() {
      axios
        .post("/api/user-update", this.user)
        .then(async (result) => {
          localStorage.setItem("user", JSON.stringify(result.data));
          await this.$swal.fire(
            this.$t("SUCCESS") + "!",
            this.$t("SUCCESS_TEXT"),
            "success"
          );
          // await location.reload();
        })
        .catch(async (err) => {
          await this.$swal.fire(
            "Hata!",
            "????lem S??ras??nda Beklennmedik Bir Hata Ger??ekle??ti.",
            "warning"
          );
        });
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
