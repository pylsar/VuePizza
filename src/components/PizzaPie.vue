<template>
    <div classs="pizzaPie">
        pie {{id}}
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
    }
}
</script>