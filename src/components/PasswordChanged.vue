<template>
  <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
    <div class="card mb-3">
      <div class="card-header">
        <h3><i class="far fa-check-square"></i> {{$t('CHANGE_PASSWORD')}}</h3>
      </div>
      <div class="card-body">
        <form @submit.prevent="update()" method="POST">
          <div class="form-group">
            <label for="exampleInputEmail1">{{$t('OLD_PASSWORD')}}</label>
            <input type="password" class="form-control" v-model="form.old_pass" id="exampleInputEmail1"
              :placeholder="$t('OLD_PASSWORD')" required>
          </div>
          <div class="form-group">
            <label for="exampleInputEmail1">{{$t('NEW_PASSWORD')}}</label>
            <input type="password" class="form-control" v-model="form.new_pass" id="exampleInputEmail1"
              :placeholder="$t('NEW_PASSWORD')" required>
          </div>
          <button type="submit" class="btn btn-primary">{{$t('CHANGE')}}</button>
        </form>
      </div>
    </div><!-- end card-->
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      form: {}
    }
  },
  methods: {
    update() {
      axios.post('/api/user-update-pass', this.form)
        .then(async (result) => {
          console.log(result.data);
          if (result.data.msg == 'Updated') {
            await this.$swal.fire(
              this.$t('SUCCESS')+'!',
              this.$t('SUCCESS_TEXT'),
              'success',
            )
          } else {
            this.$swal.fire(
              'Hata!',
              'İşlem Sırasında Hata Oluştu.',
              'danger',
            )
          }
        }).catch((err) => {

        });
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
