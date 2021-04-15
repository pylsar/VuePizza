<template>
    <div class="pizzaDeal">
        <div class="pizza__left">
            <div v-for="(pie, index) in pies" :key="index">
                <pizza-pie :id="pie.id"></pizza-pie>
            </div>
            <add-button @add="createPie"/>
        </div>
        <div class="pizza__right">
            <div>25%</div>
            <div>bigger</div>
        </div>
        <div class="pizza__name">Pizza Options A</div>
    </div>
</template>
<script>
import PizzaPie from './PizzaPie';
import AddButton from './AddButton';
export default{
    name: 'PizzaDeal',
    components:{
        PizzaPie,
        AddButton
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
        display: flex;
        justify-content: space-between;
        margin-bottom: 24px;
        // padding: 12px;
        min-height: 200px;
        position: relative;
        overflow: hidden;
    }
    .pizza{
        &__left{
            display: flex;
            align-items: center;
            flex: 1;
            background: pink;
        }
        &__right{
            width: 30%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            background: orange;
            font-size: 30px;
            line-height: 1.5;
            transform: skew(-10deg, 0) scale(1.2);
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
        &__name{
            position: absolute;
            left: 0;
            top: 0;
            background: orange;
            font-size: 30px;
            font-weight: 700;
        }
    }
    
</style>


