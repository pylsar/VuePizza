<template>
    <div class="pizzaDeal">
        <div v-for="pie in pies" :key="pie.id">
            <pizza-pie :id="pie.id"></pizza-pie>
        </div>
        <button class="pizza__plus">+</button>
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

<style lang="scss">
    .pizzaDeal{
        background: pink;
        display: flex;
        align-items: center;
        margin-bottom: 24px;
        padding: 12px;
    }
    .pizza__plus{
        padding: 6px;
        background: none;
        outline: none;
        border: 2px solid black;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        font-size: 24px;
        font-weight: 700;
    }
</style>