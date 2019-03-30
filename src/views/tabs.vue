<template>
    <div>
        <h1>tabs二次确认</h1>
        <Tabs type="card" closable @on-tab-remove="handleTabRemove" :before-remove="handleBeforeRemove">
            <TabPane label="标签一" v-if="tab0">标签一的内容</TabPane>
            <TabPane label="标签二" v-if="tab1">标签二的内容</TabPane>
            <TabPane label="标签三" v-if="tab2">标签三的内容</TabPane>
        </Tabs>
    </div>
</template>

<script>
    export default {
        name: "tabs",
        data() {
            return {
                tab0:true,
                tab1:true,
                tab2:true
            }
        },
        methods: {
            handleTabRemove(name){
                this['tab' + name] = false;
            },
            handleBeforeRemove(index){
                return new Promise((resolve,reject) => {
                    this.$Modal.confirm({
                        title:'关闭确认',
                        content:'<p>您确认关闭吗</p>',
                        onOk:() => {
                            resolve()
                        },
                        onCancel:() => {
                            reject()
                        }
                    })
                })
            }
        }
    }
</script>

<style scoped>

</style>