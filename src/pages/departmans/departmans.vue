<template>
  <div>
    <ContentHeader :title="title" />
    <Buttons :buttonTitle="buttonTitle" @refreshData="list = $event" />

    <div class="row" v-if="isComplete">
      <div v-if="list.length == 0" class="col-md-12">
        <isEmptyAlert :buttonTitle="buttonTitle" />
      </div>
      <div v-else class="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
        <div class="card mb-3">
          <div class="card-body">
            <div class="table-responsive">
              <table
                id="example1"
                class="table  table-hover display"
              >
                <thead>
                  <tr>
                    <th>{{ $t("DEPARTMAN") }}</th>
                    <th>{{ $t("TRANSACTIONS") }}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(item, index) in list" :key="index">
                    <td>{{ item.name }}</td>
                    <td>
                      <router-link
                        :to="'/departmans/'+item.id"
                        ><button
                          class="btn btn-warning"
                        >
                          <i class="fa fa-edit"></i>
                        </button>
                      </router-link>
                      <button
                        @click="remove(item.id)"
                        class="btn btn-danger ml-2"
                      >
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
    <div v-else class="" style="text-align: center">
      <div class="spinner-border" role="status"></div>
    </div>
    <!-- Modal -->
  </div>
</template>

<script>
import ContentHeader from "@/components/shared/ContentHeader";
import Buttons from "../../components/Buttons.vue";
import axios from 'axios'
export default {
  middleware: "auth-admin",

  data() {
    return {
      title: this.$t("DEPARTMANS"),
      buttonTitle: this.$t("DEPARTMAN"),
      list: [],
      isComplete: false,
    };
  },
  components: {
    ContentHeader,
    Buttons,
  },
  created() {
    this.getDepartman();
  },
  methods: {
    async getDepartman() {
      await axios
        .post("/api/departman")
        .then((result) => {
          this.list = result.data;
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
              .post("/api/departman/remove/" + id)
              .then(async (result) => {
                await this.$store.dispatch("LIST", "departman");
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
                    this.list = await this.$store.state.list;
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
