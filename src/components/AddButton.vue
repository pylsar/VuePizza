<template>
    <button class="pizza__plus"
        @click="add"    
    >
        +
    </button>
</template>
<script>
export default{
    name: 'AddButton',
    methods: {
        add(){
            this.$emit('add');
        }
    }
}
</script>