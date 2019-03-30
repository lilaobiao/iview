<template>
    <div>
        <h1>手动上传</h1>
        <Upload
                action="https://up.qbox.me"
                :format="['.jpg','jpeg','png','gif']"
                :max-size="5120"
                :on-format-error="handleFormatError"
                :on-exceeded-size="handleMaxSize"
                :before-upload="beforeUpload"
                :data="uploadForm"
                :on-progress="handleProgress"
                :on-success="success"
        >
            <Button icon="ios-cloud-upload-outline">选择文件</Button>
        </Upload>
        <Button type="primary" @click="upload" :loading="loadingStatus">
            {{loadingStatus ? '上传中':'上传'}}
        </Button>
        <img :src="'https://dsadsaaddas.com/'+img + '/large'" v-if="img">
    </div>
</template>

<script>
    import $ from '../libs/util'

    export default {
        name: "upload1",
        data() {
            return {
                uploadForm: {},
                img: ''
            }
        },
        methods: {
            handleFormatError(file) {
                this.$Notice.warning({
                    title: '文件格式不正确',
                    desc: '您上传的文件' + file.name + '格式不符合要求',
                    duration: 6
                })
            },
            handleMaxSize(file) {
                this.$Notice.warning({
                    title: '文件过大',
                    desc: '上传的文件过大' + file.name,
                    duration: 6
                })
            },
            beforeUpload(file) {
                return $.ajax({
                    method: 'post',
                    url: '/v1/file/gettoken',
                    data: {
                        token: 'vddsasdadada'
                    }
                }).then(res => {
                    this.uploadForm = {
                        token: res.data.data.token,
                        key: res.data.data.key
                    }
                })
                // 缩略图
                /*const reader = new FileReader();
                reader.readAsDataURL(file);
                reader.onloadend = () => {
                    this.img = reader.result
                }*/
            },
            handleProgress(event) {
                console.log(parseInt(event.percent))
            },
            success(res) {
                this.$Message.success('上传成功')
                this.img = res.key
            }
        }
    }
</script>

<style scoped>

</style>