<template>
    <div class="pizzaDeal">
        <div class="pizza__left">
            <div v-for="pie in pies" :key="pie.id">
                <pizza-pie :id="pie.id"></pizza-pie>
            </div>
            <button class="pizza__plus"
                @click="createPie"    
            >
            +
            </button>
        </div>
        <div class="pizza_right">
1
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
    },
    methods:{
        createPie(){
            this.$store.dispatch('createPie', {deal: this.deal,})
        }
    }
}
</script>

<style lang="scss">
    .pizzaDeal{
        background: pink;
        display: flex;
        // align-items: center;
        justify-content: space-between;
        margin-bottom: 24px;
        padding: 12px;
    }
    .pizza{
        &__left{
            display: flex;
            align-items: center;
        }
        &__plus{
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
    }
    
</style>