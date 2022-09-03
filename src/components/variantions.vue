<template>
    <div>
        <div class="row">
            <div class="col-md-12">
                <b-button style="float: right;" variant='success' v-b-modal.modal-variant> <i class="fa fa-plus"></i>
                    Varyasyon Ekle</b-button>
            </div>
        </div>
        <!-- Varyasyon Ekle -->
        <b-modal id="modal-variant" title="Varyasyon Ekle" @ok="addVariant" ok-title="Kaydet" cancel-title="Vazgeç">
            <b-form-group>
                <label for="">Varyasyon Adı</label>
                <b-form-input v-model="form.variantName" placeholder="Varyasyon Adı" required></b-form-input>
            </b-form-group>
        </b-modal>

        <!-- Varyasyonlar -->
        <div class="row">
            <b-list-group class="m-3" v-for="item, i in variants" :key="i">
                <b-list-group-item>
                    <div class="" style="display: flex;justify-content: center; align-items: center;">
                        <span class="mr-3">{{ item.name }}</span>

                        <span class="mr-2">
                            <b-button style="float: right;" variant='success btn-sm'
                                @click="$bvModal.show('modal-variant-value-' + item.id)">
                                <i class="fa fa-plus"></i> Ekle
                            </b-button>
                        </span>
                        <span>
                            <b-button class="mr-2" style="float: right;" variant='danger btn-sm'
                                @click="variantRemove(item.id)">
                                <i class="fa fa-trash"></i>
                            </b-button>
                        </span>
                    </div>
                </b-list-group-item>
                <b-list-group-item style="display: flex; justify-content: space-between; align-items: center;"
                    v-for="item, i in item.values" :key="i">
                    <div class="">
                        {{ item.name }}
                    </div>
                    <div class="">
                        <button @click="removeVariantValue(item.id, item.name)" class="btn btn-danger btn-sm"><i
                                class="fa fa-trash"></i></button>
                    </div>
                </b-list-group-item>
                <!-- Varyasyon Değeri Ekle -->
                <b-modal :id="'modal-variant-value-' + item.id" title="Varyasyon Değeri" @ok="addVariantValue(item.id)"
                    ok-title="Kaydet" cancel-title="Vazgeç">
                    <b-form-group>
                        <label for="">Varyasyon Değeri</label>
                        <b-form-input v-model="form.variantValueName" placeholder="Varyasyon Değeri" required>
                        </b-form-input>
                    </b-form-group>
                </b-modal>
            </b-list-group>
        </div>
        <div class="row" v-if="variants.length != 0">
            <div class="col-md-12">
                <b-button @click="totalVariant()" style="float: right;" variant='warning'> <i class="fa fa-plus"></i>
                    Varyasyonları Oluştur
                </b-button>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12" v-for="value, i in totalVariantCount" :key="i">
                <b-form-group>
                    <label for="">{{ value }} Stok Adedi</label>
                    <b-form-input v-model="form.variantStock" :placeholder="value + ' Stok Adedi'" required>
                    </b-form-input>
                </b-form-group>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            variants: [
                {
                    id: 1,
                    name: 'renk',
                    values: [
                        {
                            id: 1,
                            variant_id: 1,
                            name: 'mavi'
                        },
                        {
                            id: 2,
                            variant_id: 1,
                            name: 'kırmızı'
                        },
                        {
                            id: 3,
                            variant_id: 1,
                            name: 'yeşil'
                        },
                    ]
                },
                {
                    id: 2,
                    name: 'Beden',
                    values: [
                        {
                            id: 1,
                            variant_id: 2,
                            name: 's'
                        },
                        {
                            id: 2,
                            variant_id: 2,
                            name: 'm'
                        },
                        {
                            id: 3,
                            variant_id: 2,
                            name: 'l'
                        },
                        {
                            id: 4,
                            variant_id: 2,
                            name: 'xl'
                        },
                    ]
                }
            ],
            totalVariantCount: []
        }
    },
    methods: {
        async ff() {
            await this.variants.forEach(async element => {
                await this.$axios.post('http://localhost:8000/api/variant/add', { product_id: productId, name: element.name })
                    .then(async (value) => {


                        if (element.values.length > 0) {

                            element.values.forEach(async a => {

                                await this.$axios.post('http://localhost:8000/api/variantvalue/add', { product_id: productId, variant_id: value.data.id, name: a.name })
                                    .then(async (s) => {
                                        await this.$axios.post('http://localhost:8000/api/variantstock/add', { product_id: productId, variant_id: value.data.id, variant_value_id: s.data.id, stock: this.form.variantStock })
                                            .then(async (result) => {
                                                console.log('Stok Eklendi');

                                            }).catch((err) => {

                                            });

                                    }).catch((err) => {

                                    });

                            });

                        } else {
                            console.log('değer yok');
                        }

                    }).catch((err) => {

                    });

            });

        },
        async addVariant() {
            if (this.form.variantName == null) {
                this.$swal.fire(
                    this.$t('WARNING'),
                    'Alanı Boş Bırakmayın.',
                    'warning',
                )
            } else {

                if (this.variants.length < 2) {

                    this.variants.push({ id: this.variants.length + 1, name: this.form.variantName, values: [] })
                    console.log(this.variants);
                    this.form.variantName = null

                } else {
                    this.$swal.fire(
                        'Geçersiz!',
                        'En Fazla 2 Varyasyon Eklenebilir.',
                        'warning',
                    )
                    this.form = {}
                }
            }



            // await this.$axios.post('http://localhost:8000/api/variant/add', { product_id: 30, name: this.form.name })
            //     .then(async (result) => {
            //         this.form = result
            //         console.log(this.form);

            //     }).catch((err) => {

            //     });



        },
        async addVariantValue(id) {

            const variantValue = this.variants.find(a => a.id == id)

            variantValue.values.push({ id: variantValue.values.length + 1, variant_id: variantValue.id, name: this.form.variantValueName })
            this.form.variantValueName = null
            console.log(this.variants);

        },
        async variantRemove(id) {
            console.log('delete');
            // const variantValue = this.variants.find(a => a.id == id)

            // const index = this.variants.indexOf(variantValue)

            // this.variants.splice(index, 1)

            // console.log(variantValue);


        },
        async totalVariant() {
            var data = this.variants

            function modifier(data) {
                return data.map(a => a.values.map(b => b.name))
            }

            // reducer - to convert the data into desired format
            function reducer(data) {
                return data.reduce((a, b) => a.reduce((r, v) => r.concat(b.map(w => [].concat(v, w))), [])).map(i => i.join(' '))
            }

            // output - resultant data
            var output = reducer(modifier(data))
            this.totalVariantCount = output
            console.log(output)
        },
        async removeVariantValue(id, name) {
            console.log('delete');
        },
    }
}
</script>

<style lang="scss" scoped>
</style>
