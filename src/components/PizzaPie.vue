<template>
    <div classs="pizzaPie">
        <div class="pizzaPie__item"></div>    
    </div>
</template>
<script>
export default{
    name: 'PizzaPie',
    props: {
        id: {
            type: Number,
            required: true
        }
    },
    computed: {
        pie(){
            return this.$store.getters.getPie(this.id);
        }
    }
}
</script>

<style lang="scss">
   .pizzaPie{
       &__item{
           width: 64px;
           height: 64px;
           border-radius: 50%;
           background: skyblue;
           border: 2px solid black;
       }
   } 
</style>