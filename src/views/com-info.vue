<template>
    <div>
        <aa ref="comA"></aa>
        <bb ref="comB"></bb>
    </div>
</template>

<script>
    import aa from '../components/A'
    import bb from '../components/B'
    export default {
        provide(){
            return {
                name:this.names
            }
        },
        name: "parentComponent",
        data() {
            return {
                names:'parent'
            }
        },
        methods: {},
        components:{
            aa,
            bb
        },
        mounted(){
            // console.log(this.$refs.comA.value)
            // console.log(this.$children)
        }
    }
</script>

<style scoped>

</style>