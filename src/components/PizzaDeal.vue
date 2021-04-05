<template>
    <div class="pizzaDeal">
        <div v-for="pie in pies" :key="pie.id">
            <pizza-pie :id="pie.id"></pizza-pie>
        </div>
    </div>
</template>
<script>
import PizzaPie from './PizzaPie';
export default{
    name: 'PizzaDeal',
    components:{
        PizzaPie
    },
    props: {
        id: {
            type: Number,
            required: true
        }
    },
    computed: {
        deal(){
            return this.$store.getters.getDeal(this.id);
        },
        pies(){
            return this.deal.pies;
        }
    }
}
</script>