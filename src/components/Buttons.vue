<template>
  <div>
    <div class="row mb-3 justify-content-end mr-3">
      <div class="d-flex justify-content-end">
        <button
          type="button"
          class="btn btn-success"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          <i class="fa fa-plus"></i> {{ $t("ADD") }}
        </button>
      </div>
    </div>

    <!-- Marka Ekle -->
    <div
      v-if="btnType == 'brand'"
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">
              {{ $t("BRAND") }} {{ $t("ADD") }}
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <div class="form-group">
              <label for="">{{ $t("BRAND_NAME") }}</label>
              <input
                type="text"
                v-model="form.name"
                name=""
                id=""
                class="form-control"
                :placeholder="$t('BRAND_NAME')"
              />
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" @click="addBrand" class="btn btn-primary">
              {{ $t("SAVE") }}
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Kategori Ekle -->
    <div
      v-if="btnType == 'category'"
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">
              {{ $t("CATEGORY") }} {{ $t("ADD") }}
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <div class="form-group">
              <label for="">{{ $t("CATEGORY_NAME") }}</label>
              <input
                type="text"
                v-model="form.name"
                name=""
                id=""
                class="form-control"
                :placeholder="$t('CATEGORY_NAME')"
              />
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" @click="addCategory" class="btn btn-primary">
              {{ $t("SAVE") }}
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Kalıp Ekle -->
    <div
      v-if="btnType == 'pattern'"
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">
              {{ $t("PATTERN") }} {{ $t("ADD") }}
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <b-form-group>
              <label for="">{{ $t("PATTERN_NAME") }}</label>
              <b-form-input
                v-model="form.name"
                :placeholder="$t('PATTERN_NAME')"
                required
              ></b-form-input>
            </b-form-group>
          </div>
          <div class="modal-footer">
            <button type="button" @click="addPattern" class="btn btn-primary">
              {{ $t("SAVE") }}
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Kumaş Ekle -->
    <div
      v-if="btnType == 'material'"
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">
              {{ $t("MATERIAL") }} {{ $t("ADD") }}
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <b-form-group>
              <label for="">{{ $t("MATERIAL_NAME") }}</label>
              <b-form-input
                v-model="form.name"
                :placeholder="$t('MATERIAL_NAME')"
                required
              ></b-form-input>
            </b-form-group>
          </div>
          <div class="modal-footer">
            <button type="button" @click="addMaterial" class="btn btn-primary">
              {{ $t("SAVE") }}
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Sezon Ekle -->
    <div
      v-if="btnType == 'season'"
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">
              {{ $t("SEASON") }} {{ $t("ADD") }}
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <b-form-group>
              <label for="">{{ $t("SEASON_NAME") }}</label>
              <b-form-input
                v-model="form.name"
                :placeholder="$t('SEASON_NAME')"
                required
              ></b-form-input>
            </b-form-group>
          </div>
          <div class="modal-footer">
            <button type="button" @click="addSeason" class="btn btn-primary">
              {{ $t("SAVE") }}
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Departman Ekle -->
    <div
      v-if="btnType == 'departman'"
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">
              {{ $t("DEPARTMAN") }} {{ $t("ADD") }}
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <b-form-group>
              <label for="">{{ $t("DEPARTMAN") }}</label>
              <b-form-input
                v-model="form.name"
                :placeholder="$t('DEPARTMAN')"
                required
              ></b-form-input>
            </b-form-group>
          </div>
          <div class="modal-footer">
            <button type="button" @click="addDepartman" class="btn btn-primary">
              {{ $t("SAVE") }}
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Personel Ekle -->
    <div
      v-if="btnType == 'personel'"
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">
              {{ $t("PERSONEL") }} {{ $t("ADD") }}
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <b-form-group>
              <label for="">{{ $t("PERSONEL_NAME") }}</label>
              <b-form-input
                v-model="form.name"
                :placeholder="$t('PERSONEL_NAME')"
                required
              ></b-form-input>
            </b-form-group>
            <div class="form-group mb-3">
              <label for="">{{ $t("DEPARTMAN") }}</label>
              <select
                placeholder="asda"
                id=""
                v-model="form.departman_id"
                class="form-control mb-3"
              >
                <option
                  v-for="(item, i) in departmans"
                  :key="i"
                  :value="item.id"
                >
                  {{ item.name }}
                </option>
              </select>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" @click="addPersonel" class="btn btn-primary">
              {{ $t("SAVE") }}
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Not Ekle -->
    <!-- <b-modal
      v-if="buttonTitle == 'Not'"
      v-model="modalShow"
      :title="buttonTitle + ' Ekle'"
      @ok="addNote"
      ok-title="Kaydet"
      cancel-title="Vazgeç"
    >
      <b-form-group>
        <label for="">{{ buttonTitle + " Başlık" }}</label>
        <b-form-input
          v-model="form.title"
          :placeholder="buttonTitle + ' Adı'"
          required
        ></b-form-input>
      </b-form-group>
      <b-form-group>
        <label for="">{{ buttonTitle + " İçerik" }}</label>
        <b-form-input
          v-model="form.content"
          :placeholder="buttonTitle + ' içerik'"
          required
        ></b-form-input>
      </b-form-group>
    </b-modal> -->

    <!-- Ürün Ekle -->
    <div
      v-if="btnType == 'product'"
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">
              {{ $t("PRODUCT") }} {{ $t("ADD") }}
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <b-form-group>
              <label for=""
                >{{ $t("PRODUCT_IMG") }} ({{ $t("OPTIONAL") }})</label
              >
              <b-form-file type="file" @change="handleFileUpload($event)" />
            </b-form-group>
            <b-form-group>
              <label for="">{{ $t("PRODUCT_NAME") }}</label>
              <b-form-input
                v-model="form.name"
                :placeholder="$t('PRODUCT_NAME')"
                required
              ></b-form-input>
            </b-form-group>
            <div class="row">
              <div class="col-md-6">
                <b-form-group>
                  <label for="">{{ $t("PRODUCT_CODE") }}</label>
                  <b-form-input
                    v-model="form.code"
                    :placeholder="$t('PRODUCT_CODE')"
                    required
                  ></b-form-input>
                </b-form-group>
              </div>
              <div class="col-md-6">
                <b-form-group>
                  <label for="">{{ $t("PRODUCT_QTY") }}</label>
                  <b-form-input
                    v-model="form.qty"
                    :placeholder="$t('PRODUCT_CODE')"
                    required
                  ></b-form-input>
                </b-form-group>
              </div>
            </div>
            <div class="form-group mb-3">
              <label for="">{{ $t("SELECTED_SEASON") }}</label>
              <select id="" v-model="form.season_id" class="form-control mb-3">
                <option
                  class=""
                  v-for="(item, i) in seasons"
                  :key="i"
                  :value="item.id"
                >
                  {{ item.name }}
                </option>
              </select>
            </div>
            <div class="form-group mb-3">
              <label for="">{{ $t("SELECTED_CATEGORY") }}</label>
              <select
                id=""
                v-model="form.category_id"
                class="form-control mb-3"
              >
                <option
                  class=""
                  v-for="(item, i) in categories"
                  :key="i"
                  :value="item.id"
                >
                  {{ item.name }}
                </option>
              </select>
            </div>
            <div class="form-group mb-3">
              <label for="">{{ $t("SELECTED_BRAND") }}</label>
              <select id="" v-model="form.brand_id" class="form-control mb-3">
                <option
                  class=""
                  v-for="(item, i) in brands"
                  :key="i"
                  :value="item.id"
                >
                  {{ item.name }}
                </option>
              </select>
            </div>

            <div class="form-group mb-3">
              <label for="">{{ $t("SELECTED_MATERIAL") }}</label>
              <select
                id=""
                v-model="form.material_id"
                class="form-control mb-3"
              >
                <option
                  class=""
                  v-for="(item, i) in materials"
                  :key="i"
                  :value="item.id"
                >
                  {{ item.name }}
                </option>
              </select>
            </div>
            <div class="form-group mb-3">
              <label for="">{{ $t("SELECTED_PATTERN") }}</label>
              <select id="" v-model="form.pattern_id" class="form-control mb-3">
                <option
                  class=""
                  v-for="(item, i) in patterns"
                  :key="i"
                  :value="item.id"
                >
                  {{ item.name }}
                </option>
              </select>
            </div>
            <b-form-group>
              <label for=""
                >{{ $t("PRODUCT_CONTENT") }} ({{ $t("OPTIONAL") }})</label
              >
              <b-form-input
                v-model="form.content"
                placeholder="Ürün Açıklaması (Opsiyonel)"
                required
              ></b-form-input>
            </b-form-group>
            <div class="row">
              <div class="col-md-6">
                <b-form-group>
                  <label for="">{{ $t("PRODUCT_COST") }}</label>
                  <b-form-input
                    v-model="form.cors"
                    :placeholder="$t('PRODUCT_COST')"
                    required
                  ></b-form-input>
                </b-form-group>
              </div>
              <div class="col-md-6">
                <b-form-group>
                  <label for="">{{ $t("PRODUCT_PRICE") }}</label>
                  <b-form-input
                    v-model="form.price"
                    :placeholder="$t('PRODUCT_PRICE')"
                    required
                  ></b-form-input>
                </b-form-group>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" @click="addProduct" class="btn btn-primary">
              {{ $t("SAVE") }}
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Müşteri Ekle -->
    <div
      v-if="btnType == 'customer'"
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">
              {{ $t("CUSTOMER") }} {{ $t("ADD") }}
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <b-form-group>
              <label for="">{{ $t("CUSTOMER_NAME") }}</label>
              <b-form-input
                v-model="form.name"
                :placeholder="$t('CUSTOMER_NAME')"
                required
              ></b-form-input>
            </b-form-group>
            <b-form-group>
              <label for="">{{ $t("ADDRESS") }}</label>
              <b-form-input
                v-model="form.address"
                :placeholder="$t('ADDRESS')"
                required
              ></b-form-input>
            </b-form-group>
            <b-form-group>
              <label for="">{{ $t("E-MAIL") }}</label>
              <b-form-input
                v-model="form.email"
                :placeholder="$t('E-MAIL')"
                required
              ></b-form-input>
            </b-form-group>
            <b-form-group>
              <label for="">{{ $t("PHONE") }}</label>
              <b-form-input
                v-model="form.phone"
                :placeholder="$t('PHONE')"
                required
              ></b-form-input>
            </b-form-group>
          </div>
          <div class="modal-footer">
            <button type="button" @click="addCustomer" class="btn btn-primary">
              {{ $t("SAVE") }}
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Gelir - Gider Ekle -->
    <div
      v-if="btnType == 'current'"
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">
              {{ $t("CURRENT") }} {{ $t("ADD") }}
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <div class="d-flex">
              <div class="form-check" style="width: 100%">
                <label class="form-check-label">
                  <input
                    type="radio"
                    v-model="form.type"
                    class="m-2"
                    name="some-radios"
                    value="1"
                  />
                  Gelir
                </label>
                <label class="form-check-label">
                  <input
                    type="radio"
                    v-model="form.type"
                    class="m-2"
                    name="some-radios"
                    value="0"
                  />
                  Gider
                </label>
                <div class="form-group">
                  <label for="">Başlık</label>
                  <input
                    type="text"
                    v-model="form.title"
                    class="form-control"
                    placeholder="Başlık"
                    required
                  />
                </div>
                <div class="form-group">
                  <label for="">Miktar</label>
                  <input
                    type="text"
                    v-model="form.price"
                    class="form-control"
                    placeholder="Miktar"
                    required
                  />
                </div>
                <div class="form-group">
                  <label for="">Tarih</label>
                  <input
                    type="date"
                    v-model="form.current_date"
                    class="form-control"
                  />
                </div>
                <div class="form-group">
                  <label for="">Açıklama</label>
                  <input
                    type="text"
                    v-model="form.desc"
                    class="form-control"
                    placeholder="Açıklama"
                    required
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" @click="addCurrent" class="btn btn-primary">
              {{ $t("SAVE") }}
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Fatura Ekle -->
    <div
      v-if="btnType == 'invoice'"
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">
              {{ $t("INVOICE") }} {{ $t("ADD") }}
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <b-form-group
              :label="$t('INVOICE_TYPE')"
              v-slot="{ ariaDescribedby }"
            >
              <div class="d-flex">
                <b-form-radio
                  v-model="form.type"
                  :aria-describedby="ariaDescribedby"
                  class="m-2"
                  name="some-radios"
                  value="1"
                >
                  {{ $t("SELL") }}
                </b-form-radio>
                <b-form-radio
                  v-model="form.type"
                  :aria-describedby="ariaDescribedby"
                  class="m-2"
                  name="some-radios"
                  value="0"
                >
                  {{ $t("RETURN") }}
                </b-form-radio>
              </div>
            </b-form-group>
            <b-form-group :label="$t('INVOICE_DATE')">
              <div class="d-flex">
                <input
                  type="date"
                  name=""
                  v-model="form.invoice_date"
                  id=""
                  class="form-control"
                />
                <!-- <b-form-datepicker
                  v-model="form.invoice_date"
                ></b-form-datepicker> -->
              </div>
            </b-form-group>
            <b-form-group>
              <label for="">{{ $t("CUSTOMER") }}</label>
              <select
                id=""
                v-model="form.customer_id"
                class="form-control mb-3"
              >
                <option
                  class=""
                  v-for="(item, i) in customers"
                  :key="i"
                  :value="item.id"
                >
                  {{ item.name }}
                </option>
              </select>
            </b-form-group>
            <div
              class="row"
              v-for="(item, index) in invoiceProducts"
              :key="index"
            >
              <div class="col-md-6">
                <b-form-group>
                  <label for="">{{ $t("PRODUCT") }}</label>
                  <select
                    id=""
                    v-model="item.product_id"
                    class="form-control mb-3"
                  >
                    <option
                      class=""
                      v-for="(item, i) in products"
                      :key="i"
                      :value="item.id"
                    >
                      {{ item.code }} /{{ item.name }}
                    </option>
                  </select>
                </b-form-group>
              </div>
              <div class="col-md-2">
                <b-form-group>
                  <label for="">{{ $t("QTY") }}</label>
                  <b-form-input
                    @change="invoiceProductCount"
                    v-model="item.qty"
                    :placeholder="$t('QTY')"
                    required
                  >
                  </b-form-input>
                </b-form-group>
              </div>
              <div class="col-md-3">
                <b-form-group>
                  <label for="">{{ $t("PRICE") }}</label>
                  <b-form-input
                    @change="invoiceTotalAmount"
                    v-model="item.price"
                    :placeholder="$t('PRICE')"
                    required
                  >
                  </b-form-input>
                </b-form-group>
              </div>
              <div
                class="col-md-1"
                style="
                  display: flex;
                  justify-content: center;
                  align-items: center;
                "
              >
                <button
                  class="btn btn-danger"
                  @click="removeInvoiceProductControl(item.id)"
                >
                  <i class="fa fa-trash"></i>
                </button>
              </div>
            </div>
            <div class="row">
              <div
                class="col-md-12"
                style="display: flex; justify-content: end; align-items: center"
              >
                <button class="btn btn-success" @click="addInvoiceProduct">
                  <i class="fa fa-plus"></i> {{ $t("ADD_PRODUCT_TO_INVOICE") }}
                </button>
              </div>
            </div>
            <div class="row mt-3 d-flex justify-content-end">
              <div class="col-md-4">
                <div class="card">
                  <div class="card-header">{{ $t("INVOICE_DETAIL") }}</div>
                  <div class="card-body">
                    <p>
                      {{ $t("TOTAL_PRODUCT_TYPE") }} :
                      <b>{{ invoiceProducts.length }}</b>
                    </p>
                    <p>
                      {{ $t("TOTAL_PRODUCT_COUNT") }} :
                      <b>{{ totalProductCount }}</b>
                    </p>
                    <p>
                      {{ $t("TOTAL_INVOICE_AMOUNT") }} :
                      <b>{{ totalInvoiceAmount }}{{ money }}</b>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" @click="addInvoice" class="btn btn-primary">
              {{ $t("SAVE") }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  components: {},
  data() {
    return {
      money: JSON.parse(localStorage.getItem("user")).money,

      modalShow: false,
      img: {},
      form: {},
      isEmpty: false,
      departmans: [],
      seasons: [],
      categories: [],
      brands: [],
      products: [],
      materials: [],
      patterns: [],
      customers: [],
      totalProductCount: 0,
      totalInvoiceAmount: 0,
      invoiceProducts: [
        {
          id: 1,
          product_id: null,
          qty: null,
          price: null,
        },
      ],
    };
  },
  props: {
    buttonTitle: {
      type: String,
    },
    btnType: {
      type: String,
    },
    fun: { type: Function },
    currentFunc: { type: Function },
  },
  mounted() {
    this.getDepartmans();
    this.getSeason();
    this.getCategory();
    this.getBrand();
    this.getMaterial();
    this.getPattern();
    this.getCustomer();
    this.getProduct();
  },
  methods: {
    async handleFileUpload(event) {
      this.form.file = event.target.files[0];
      console.log(this.form);
      // this.form.img = formData;
    },
    async addCurrent() {
      if (
        this.form.title == null ||
        this.form.price == null ||
        this.form.current_date == null
      ) {
        this.$swal.fire(this.$t("WARNING"), this.$t("WARNING_TEXT"), "warning");
      } else {
        await axios
          .post("/api/current/add", this.form)
          .then(async (result) => {
            await this.$store.dispatch("LIST", "current");
            await this.$swal.fire(
              this.$t("SUCCESS") + "!",
              this.$t("SUCCESS_TEXT"),
              "success"
            );
            this.form.name = "";
            setTimeout(() => {
              this.currentFunc();
            }, 1500);
            // this.$emit("refreshData", this.$store.state.list);
            this.form = {};
            // await location.reload();
          })
          .catch((err) => {});
      }
    },
    async addBrand() {
      if (this.form.name == null) {
        this.$swal.fire(this.$t("WARNING"), this.$t("WARNING_TEXT"), "warning");
      } else {
        await axios
          .post("/api/brand/add", this.form)
          .then(async (result) => {
            await this.$store.dispatch("LIST", "brand");
            await this.$swal.fire(
              this.$t("SUCCESS") + "!",
              this.$t("SUCCESS_TEXT"),
              "success"
            );
            this.form.name = "";
            await this.$emit("refreshData", this.$store.state.list);
            this.form = {};
            // await location.reload();
          })
          .catch((err) => {});
      }
    },
    async addCategory() {
      if (this.form.name == null) {
        this.$swal.fire(this.$t("WARNING"), this.$t("WARNING_TEXT"), "warning");
      } else {
        await axios
          .post("/api/category/add", this.form)
          .then(async (result) => {
            await this.$store.dispatch("LIST", "category");
            await this.$swal.fire(
              this.$t("SUCCESS") + "!",
              this.$t("SUCCESS_TEXT"),
              "success"
            );
            this.form.name = "";

            await this.$emit("refreshData", this.$store.state.list);
            this.form = {};

            // await location.reload();
          })
          .catch((err) => {});
      }
    },
    async addPattern() {
      if (this.form.name == null) {
        this.$swal.fire(this.$t("WARNING"), this.$t("WARNING_TEXT"), "warning");
      } else {
        await axios
          .post("/api/pattern/add", this.form)
          .then(async (result) => {
            await this.$store.dispatch("LIST", "pattern");
            await this.$swal.fire(
              this.$t("SUCCESS") + "!",
              this.$t("SUCCESS_TEXT"),
              "success"
            );
            this.form.name = "";
            await this.$emit("refreshData", this.$store.state.list);
            this.form = {};

            // await location.reload();
          })
          .catch((err) => {});
      }
    },
    async addMaterial() {
      if (this.form.name == null) {
        this.$swal.fire(this.$t("WARNING"), this.$t("WARNING_TEXT"), "warning");
      } else {
        await axios
          .post("/api/material/add", this.form)
          .then(async (result) => {
            await this.$store.dispatch("LIST", "material");
            await this.$swal.fire(
              this.$t("SUCCESS") + "!",
              this.$t("SUCCESS_TEXT"),
              "success"
            );
            this.form.name = "";
            await this.$emit("refreshData", this.$store.state.list);
            this.form = {};
            // await location.reload();
          })
          .catch((err) => {});
      }
    },
    async addSeason() {
      if (this.form.name == null) {
        this.$swal.fire(
          this.$t("WARNING") + "!",
          this.$t("WARNING_TEXT"),
          "warning"
        );
      } else {
        await axios
          .post("/api/season/add", this.form)
          .then(async (result) => {
            await this.$store.dispatch("LIST", "season");
            await this.$swal.fire(
              this.$t("SUCCESS") + "!",
              this.$t("SUCCESS_TEXT"),
              "success"
            );
            this.form.name = "";
            await this.$emit("refreshData", this.$store.state.list);
            this.form = {};
            // await location.reload();
          })
          .catch((err) => {});
      }
    },
    async addDepartman() {
      if (this.form.name == null) {
        this.$swal.fire(this.$t("WARNING"), this.$t("WARNING_TEXT"), "warning");
      } else {
        await axios
          .post("/api/departman/add", this.form)
          .then(async (result) => {
            await this.$store.dispatch("LIST", "departman");
            await this.$swal.fire(
              this.$t("SUCCESS") + "!",
              this.$t("SUCCESS_TEXT"),
              "success"
            );
            this.form.name = "";
            await this.$emit("refreshData", this.$store.state.list);
            this.form = {};

            // await location.reload();
          })
          .catch((err) => {});
      }
    },
    async addPersonel() {
      if (this.form.name == null || this.form.departman_id == null) {
        this.$swal.fire(this.$t("WARNING"), this.$t("WARNING_TEXT"), "warning");
      } else {
        await axios
          .post("/api/personel/add", this.form)
          .then(async (result) => {
            await this.$store.dispatch("LIST", "personel");
            await this.$swal.fire(
              this.$t("SUCCESS") + "!",
              this.$t("SUCCESS_TEXT"),
              "success"
            );
            await this.$emit("refreshData", this.$store.state.list);
            this.form = {};
            // await location.reload();
          })
          .catch((err) => {});
      }
    },
    async addProduct() {
      if (
        this.form.name == null ||
        this.form.season_id == null ||
        this.form.category_id == null ||
        this.form.brand_id == null ||
        this.form.code == null ||
        this.form.qty == null ||
        this.form.material_id == null ||
        this.form.pattern_id == null ||
        this.form.price == null
      ) {
        this.$swal.fire(this.$t("WARNING"), this.$t("WARNING_TEXT"), "warning");
      } else {
        let formData = new FormData();
        await formData.append("file", this.form.file);
        await formData.append("name", this.form.name);
        await formData.append("price", this.form.price);
        await formData.append("cors", this.form.cors);
        await formData.append("code", this.form.code);
        await formData.append("qty", this.form.qty);
        await formData.append("content", this.form.content);
        await formData.append("category_id", this.form.category_id);
        await formData.append("pattern_id", this.form.pattern_id);
        await formData.append("brand_id", this.form.brand_id);
        await formData.append("material_id", this.form.material_id);
        await formData.append("season_id", this.form.season_id);
        await axios
          .post("/api/product/add", formData, {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          })
          .then(async (result) => {
            await this.$store.dispatch("LIST", "product");
            await this.$swal.fire(
              this.$t("SUCCESS") + "!",
              this.$t("SUCCESS_TEXT"),
              "success"
            );
            console.log(this.$store.state.list);
            setTimeout(async () => {
              await this.$emit("refreshData", this.$store.state.list);
            }, 1500);
            this.form = {};
            // await location.reload();
          })
          .catch((err) => {});
      }
    },
    async addNote() {
      if (this.form.name == null) {
        this.$swal.fire(this.$t("WARNING"), this.$t("WARNING_TEXT"), "warning");
      } else {
        await axios
          .post("/api/note/add", this.form)
          .then(async (result) => {
            await this.$swal.fire(
              this.$t("SUCCESS") + "!",
              this.$t("SUCCESS_TEXT"),
              "success"
            );
            await location.reload();
          })
          .catch((err) => {});
      }
    },
    async addCustomer() {
      if (this.form.name == null) {
        this.$swal.fire(this.$t("WARNING"), this.$t("WARNING_TEXT"), "warning");
      } else {
        await axios
          .post("/api/customer/add", this.form)
          .then(async (result) => {
            await this.$store.dispatch("LIST", "customer");
            await this.$swal.fire(
              this.$t("SUCCESS") + "!",
              this.$t("SUCCESS_TEXT"),
              "success"
            );
            this.form.name = "";
            await this.$emit("refreshData", this.$store.state.list);
            this.form = {};
            // await location.reload();
          })
          .catch((err) => {});
      }
    },
    async getDepartmans() {
      await axios
        .post("/api/departman")
        .then((result) => {
          this.departmans = result.data;
        })
        .catch((err) => {});
    },
    async getSeason() {
      await axios
        .post("/api/season")
        .then((result) => {
          this.seasons = result.data;
        })
        .catch((err) => {});
    },
    async getCategory() {
      await axios
        .post("/api/category")
        .then((result) => {
          this.categories = result.data;
        })
        .catch((err) => {});
    },
    async getBrand() {
      await axios
        .post("/api/brand")
        .then((result) => {
          this.brands = result.data;
        })
        .catch((err) => {});
    },
    async getMaterial() {
      await axios
        .post("/api/material")
        .then((result) => {
          this.materials = result.data;
        })
        .catch((err) => {});
    },
    async getPattern() {
      await axios
        .post("/api/pattern")
        .then((result) => {
          this.patterns = result.data;
        })
        .catch((err) => {});
    },
    async getCustomer() {
      await axios
        .post("/api/customer")
        .then((result) => {
          result.data.forEach((element) => {
            element.label = element.name;
            element.value = element.id;
            this.customers.push(element);
          });
        })
        .catch((err) => {});
    },
    async getProduct() {
      await axios
        .post("/api/product/all")
        .then((result) => {
          this.products = result.data;
        })
        .catch((err) => {});
    },
    async addInvoice() {
      await axios
        .post("/api/invoice/add", this.form)
        .then(async (result) => {
          await this.$store.dispatch("LIST", "invoice");
          await this.invoiceProducts.map(async (e) => {
            await axios
              .post("/api/invoice-product/add", {
                invoice_id: Number(result.data.id),
                product_id: Number(e.product_id),
                qty: Number(e.qty),
                price: Number(e.price),
              })
              .catch((err) => {});
          });
          // await this.$store.dispatch("LIST", "invoice-product");

          await this.$swal.fire(
            this.$t("SUCCESS") + "!",
            this.$t("SUCCESS_TEXT"),
            "success"
          );
          setTimeout(async () => {
            this.fun();
            // await this.$emit("refreshData", this.$store.state.list);
          }, 1500);
          this.form = {};
          this.invoiceProducts = [];
          // await location.reload();
        })
        .catch((err) => {});
    },
    async addInvoiceProduct() {
      const newProduct = {
        id: Math.ceil(Math.random() * 1000000),
        product_id: null,
        qty: null,
        price: null,
      };

      this.invoiceProducts.push(newProduct);
      console.log(this.invoiceProducts);
    },
    async removeInvoiceProduct(id) {
      const findProduct = this.invoiceProducts.find((e) => e.id == id);
      const productIndex = this.invoiceProducts.indexOf(findProduct);
      this.invoiceProducts.splice(productIndex, 1);
      this.invoiceProductCount();
      this.invoiceTotalAmount();
    },
    async removeInvoiceProductControl(id) {
      this.$swal
        .fire({
          title: this.$t("DELETED_CONFIRM") + "?",
          text: this.$t("DELETE_TEXT_INVOICE"),
          icon: "Warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: this.$t("DELETE_YES"),
        })
        .then((result) => {
          if (result.value) {
            this.removeInvoiceProduct(id);
          }
        });
    },
    async invoiceProductCount() {
      var total = Number(0);

      this.invoiceProducts.map((e) => {
        total = Number(total) + Number(e.qty);
      });

      this.totalProductCount = total;
    },
    async invoiceTotalAmount() {
      var total = Number(0);

      this.invoiceProducts.map((e) => {
        total = Number(total) + Number(e.qty) * Number(e.price);
      });

      this.totalInvoiceAmount = total;
    },
  },
};
</script>


<style lang="scss" scoped>
</style>
