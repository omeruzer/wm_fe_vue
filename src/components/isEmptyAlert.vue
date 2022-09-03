<template>
    <div>
        <b-alert v-if="this.$i18n.locale == 'tr'" show variant="info">Kayıtlı {{ buttonTitle }} Bulunmuyor.</b-alert>
        <b-alert v-if="this.$i18n.locale == 'en'"  show variant="info">No registered {{ buttonTitle }}.</b-alert>

    </div>
</template>

<script>
export default {
    props:['buttonTitle']
}
</script>

<style lang="scss" scoped>
</style>
