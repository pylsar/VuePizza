<template>
    <div class="pizza">
        <div v-for="deal in deals" :key="deal.id">
            <pizza-deal :id="deal.id"></pizza-deal>
        </div>
    </div>
</template>
<script>
import PizzaDeal from './PizzaDeal.vue';

export default{
    name: 'PizzaApp',
    components: {
        PizzaDeal
        
    },
    computed: {
        deals(){
            return this.$store.getters.deals;
        },
    }
}
</script>