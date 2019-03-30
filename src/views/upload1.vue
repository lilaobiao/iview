<template>
    <div>
        <h1>手动上传</h1>
        <Upload
                action="//jsonplaceholder.typicode.com/posts/"
                :before-upload="handleUpload"
                ref="upload"
                :on-success="handleSuccess"
                :on-error="handleError"
        >
            <Button icon="ios-cloud-upload-outline">选择文件</Button>
        </Upload>
        <Button type="primary" @click="upload" :loading="loadingStatus">
            {{loadingStatus ? '上传中':'上传'}}
        </Button>
    </div>
</template>

<script>
    export default {
        name: "upload1",
        data() {
            return {
                loadingStatus:false,
                file:null
            }
        },
        methods: {
            upload() {
                this.loadingStatus = true
                this.$refs.upload.post(this.file)
            },
            handleUpload(file){
                this.file = file
                return false
            },
            handleSuccess(){
                this.file = null
                this.loadingStatus = false
                this.$Message.success('上传成功')
            },
            handleError(){
                this.file = null
                this.loadingStatus = false
                this.$Message.success('上传失败')
            },
        }
    }
</script>

<style scoped>

</style>