<template>
    <v-footer 
        padless>
        <v-col
            class="text-center"
            cols="12"
        >
            {{ new Date().getFullYear() }} — <strong>Cappibahra</strong>
        </v-col>
    </v-footer>
</template>
<script>
export default {
    data: () => ({
        variant: 'default',
    }),
    computed: {
        localAttrs () {
            const attrs = {}

            attrs[this.variant] = true
            return attrs
        },
    },
}
</script>
<style scope>
    
</style>