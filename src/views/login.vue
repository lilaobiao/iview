<template>
  <div>
    这是登录页面
    <Button @click="handleLogin">登录</Button>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data () {
    return {

    }
  },
  components: {

  },
  methods: {
    handleLogin () {
      window.localStorage.setItem('login', 1)
    }
  }
}
</script>

<style scoped lang="less">
</style>