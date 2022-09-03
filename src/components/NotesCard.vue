<template>
    <div class="card" style="width: 18rem;border-radius: 5%;">
        <div class="card-header">
            <i @click="removeNote(item.id)" class="fa fa-trash justify-content-end float-right"
                style="cursor: pointer;"></i>
        </div>
        <div class="card-body">
            <h5 class="card-title">{{ item.title }}</h5>
            <p class="card-text">{{ item.content }}</p>
        </div>
    </div>
</template>

<script>
export default {
    props: ['item'],
    methods: {
        removeNote(id) {

            this.$swal.fire({
                title: this.$t('DELETED_CONFIRM')+'?',
                text: "Bu notu silersen bir daha geri alamayacaksın",
                icon: 'Warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: this.$t('DELETE_YES')
            }).then((result) => {
                if (result.value) {

                    this.$swal.fire(
                        this.$t('DELETED')+'!',
                        this.$t('SUCCESS_TEXT'),
                        'success'
                    ).then(async (result) => {
                        await this.$axios.post('http://localhost:8000/api/note/remove/' + id)
                            .then((result) => {
                                this.item = result.data
                                console.log(this.item);
                            }).catch((err) => {

                            });
                        await location.reload();
                    }).catch((err) => {

                    });

                }
            })
        }
    },
}
</script>

<style scoped>
.fa-trash:hover {
    color: red;
}
</style>
