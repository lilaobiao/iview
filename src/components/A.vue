<template>
    <div>A{{name}}</div>

</template>

<script>
    import {findComponentUpward} from 'iview/src/utils/assist'
    export default {
        inject:['name'],
        name: "A",
        data() {
            return {
                value:100
            }
        },
        methods: {},
        mounted(){
            /*const parent = findComponentUpward(this,'parentComponent')
            console.log(parent)*/
            console.log(this.name)
            // console.log(this.$parent)
        }
    }
</script>

<style scoped>

</style>