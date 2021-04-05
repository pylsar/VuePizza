<template>
    <div class="pizza">
        <div v-for="deal in deals" :key="deal.id">
            {{deal.id}}31
        </div>
    </div>
</template>
<script>

export default{
    name: 'PizzaApp',
    computed: {
        deals(){
            return this.$store.state.deals;
        },
        numberOfDeals(){
            return this.$store.getters.numberOfDeals;
        }
    }
}
</script>