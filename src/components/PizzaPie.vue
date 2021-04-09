<template>
    <div classs="pizzaPie">
        <div class="pizzaPie__item">
            <div class="pizzaPie__diameter" 
                :style="[sizeStyle]"
            >
                {{pie.diameter}} см
            </div>
           
        </div>
         <div class="pizzaPie__arrows">
                <button @click="decreaseSize">↓</button>
                <button @click="increaseSize">↑</button>
            </div>
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
        },
        sizeStyle(){
            const pixelDiameter = this.pie.diameter * 10;
            return{
                width: pixelDiameter + 'px',
                height: pixelDiameter + 'px'
            }
        }
    },
    methods: {
        increaseSize(){
            this.$store.dispatch("changePieSizeBy", {pie: this.pie, delta: 0.5});
        },
        decreaseSize(){
            this.$store.dispatch("changePieSizeBy", {pie: this.pie, delta: -0.5});
        }
    }
}
</script>

<style lang="scss">
   .pizzaPie{
       &__item{
           border-radius: 50%;
           background: skyblue;
           border: 2px solid black;
           display: flex;
           flex-direction: column;
           justify-content: center;
           align-items: center;
           color: white;
       }
       &__diameter{
            display: flex;
            justify-content: center;
            align-items: center;
       }
       &__arrows{
            display: flex;
            justify-content: center;
            align-items: center;
           & button {
               padding: 5px;
               cursor: pointer;
               border: none;
               outline: none;
               background: none;
               font-weight: 700;
               color: black;
               &:first-child{
                   font-size: 10px;
               }
           }
       }
   } 
</style>