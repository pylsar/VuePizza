<template>
    <div class="pizza">
        <div v-for="deal in deals" :key="deal.id">
            <pizza-deal :id="deal.id"></pizza-deal>
        </div>
        <add-button @add="createDeal"/>
    </div>
</template>
<script>
import PizzaDeal from './PizzaDeal.vue';
import AddButton from './AddButton.vue';

export default{
    name: 'PizzaApp',
    components: {
        PizzaDeal,
        AddButton
    },
    computed: {
        deals(){
            return this.$store.getters.deals;
        },
    },
    methods: {
        createDeal(){
            this.$store.dispatch('createDeal')
        }
    }
}
</script>

<style>
.pizza{
    width: 70vw;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
</style>