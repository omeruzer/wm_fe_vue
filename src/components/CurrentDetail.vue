<template>
  <div>
    <div
      class="modal fade"
      :id="'exampleModal-' + item.id"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">
              <code>{{ item.title }}</code> - {{ item.price }} ₺
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <div class="d-block ">
              <div class="row">
                <div class="form-group ml-3">
                  <span>
                    <div
                      v-if="item.type == 1"
                      class="
                        sales
                        d-flex
                        justift-content-center
                        align-items-center
                        ml-2
                      "
                    >
                      <div class="sales-circle mr-2"></div>
                      <div class="sales-text">
                        <b>Gelir</b>
                      </div>
                    </div>
                    <div
                      v-else
                      class="
                        return
                        d-flex
                        justift-content-center
                        align-items-center
                        ml-2
                      "
                    >
                      <div class="return-circle mr-2"></div>
                      <div class="return-text">Gider</div>
                    </div>
                  </span>
                </div>
              </div>
              <div class="row">
                <div class="form-group ml-3">
                  <label for="">Başlık:</label>
                  <span>{{ item.title }}</span>
                </div>
              </div>
              <div class="row">
                <div class="form-group ml-3">
                  <label for="">Tarih:</label>
                  <span>{{ item.current_date.substr(0, 10) }}</span>
                </div>
              </div>
              <div class="row">
                <div class="form-group ml-3">
                  <label for="">Miktar:</label>
                  <span>{{ item.price }}₺</span>
                </div>
              </div>
              <div class="row">
                <div class="form-group ml-3">
                  <label for="">Açıklama:</label>
                  <span>{{ item.title }}</span>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Kapat
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["item"],
};
</script>

<style  scoped>
.sales-circle {
  background-color: green;
  width: 10px;
  height: 10px;
  border-radius: 100%;
}

.sales-text {
  color: green;
}

.return-circle {
  background-color: rgb(216, 31, 31);
  width: 10px;
  height: 10px;
  border-radius: 100%;
}

.return-text {
  color: rgb(216, 31, 31);
}
</style>
