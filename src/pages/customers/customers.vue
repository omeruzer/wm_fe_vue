<template>
  <div>
    <ContentHeader :title="$t('CUSTOMERS')" />

    <Buttons :buttonTitle="buttonTitle" btnType='customer' @refreshData="customers = $event" />

    <div class="row" v-if="isComplete">
      <div v-if="customers.length == 0" class="col-md-12">
        <isEmptyAlert :buttonTitle="buttonTitle" />
      </div>
      <div v-else class="col-md-12">
        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
          <div class="card mb-3">
            <div class="card-body">
              <div class="table-responsive">
                <table
                  id="example1"
                  class="table  table-hover display"
                >
                  <thead>
                    <tr>
                      <th>{{ $t("CUSTOMER_NAME") }}</th>
                      <th>{{ $t("TRANSACTIONS") }}</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(item, i) in customers" :key="i">
                      <td>{{ item.name }}</td>
                      <td>
                        <router-link :to="'/customers/' + item.id"
                          ><button class="btn btn-warning">
                            <i class="fa fa-edit"></i>
                          </button>
                        </router-link>
                        <button class="btn btn-danger ml-2" @click="remove(item.id)">
                          <i class="fa fa-trash"></i>
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
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
import Buttons from "@/components/Buttons";
import axios from 'axios'
export default {
  middleware: "auth-admin",

  data() {
    return {
      title: this.$t("CUSTOMERS"),
      buttonTitle: this.$t("CUSTOMER"),
      customers: [],
      isComplete: false,
    };
  },
  components: {
    ContentHeader,
    Buttons,
  },
  created() {
    this.getCustomers();
  },
  methods: {
    async getCustomers() {
      await axios
        .post("/api/customer")
        .then((result) => {
          this.customers = result.data;
          this.isComplete = true;
          console.log(this.list);
        })
        .catch((err) => {});
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
              .post("/api/customer/remove/" + id)
              .then(async (result) => {
                await this.$store.dispatch("LIST", "customer");
                this.item = result.data;
                console.log(this.item);
                this.$swal
                  .fire(
                    this.$t("DELETED") + "!",
                    this.$t("SUCCESS_TEXT"),
                    "success"
                  )
                  .then(async (result) => {
                    await setTimeout(async () => {}, 1500);
                    // await location.reload();
                    this.customers = await this.$store.state.list;
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


<style lang="scss" scoped>
</style>
