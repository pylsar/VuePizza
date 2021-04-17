<template>
    <div class="pizzaDeal">
        <div class="pizza__left">
            <div v-for="(pie, index) in pies" :key="index">
                <pizza-pie :id="pie.id"></pizza-pie>
            </div>
            <add-button @add="createPie"/>
        </div>
        <div class="pizza__right">
            <div>{{stats.diff | percentege(1)}}</div>
            <div>{{isLargest ? 'bigger' : 'smaller'}}</div>
            <button 
                class="pizza__delete"
                @click="deleteDeal"
            >
            -</button>
        </div>
        <div class="pizza__name">Pizza Options {{dealName}}</div>
    </div>
</template>
<script>
import PizzaPie from './PizzaPie';
import AddButton from './AddButton';
import percentege from '../filters/percentege.js';
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

        stats(){
            return this.$store.getters.getDealStats(this.deal);
        },

        isLargest(){
            return this.stats.isLargest;
        },

        pies(){
            return this.deal.pies;
        },
        dealName(){
            return this.$store.getters.getDealName(this.deal);
        }
    },
    methods:{
        createPie(){
            this.$store.dispatch('createPie', {deal: this.deal,})
        },
        deleteDeal(){
            this.$store.dispatch('deleteDeal', {deal: this.deal});
        }
    },
    filters: {
        percentege
    }
}
</script>

<style lang="scss">
    .pizzaDeal{
        display: flex;
        justify-content: space-between;
        margin-bottom: 24px;
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
        &__delete{
            position: absolute;
            top: 15%;
            right: 15%;
            background: red;
            color: white;
            font-weight: 700;
            font-size: 30px;
            line-height: 1;
            width: 50px;
            height: 50px;
            display: flex;
            justify-content: center;
            align-items: center;
            border: none;
            outline: none;
            border-radius: 50%;
            transform: skew(10deg, 0);
            cursor: pointer;
        }
    }
    
</style>


