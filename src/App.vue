<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  data () {
    return {
      activeName: this.$route.path,
      content: ''
    }
  },
  methods: {
    handleSetData () {
      this.content = "dasdaasdadadssaddasasddssaddsasdsdadasdasdasdaasdadadssaddasasddssaddsasdsdadasdasdasdaasdadadssaddasasddssaddsasdsdadasdasdasdaasdadadssaddasasddssaddsasdsdadasdas"
    }
  },
  watch: {
    '$route' () {
      this.activeName = this.$route.path
    }
  }
}
</script>
<style>
* {
  margin: 0;
  padding: 0;
}
body {
  height: 5000px;
  background: #f8f8f9 !important;
}
</style>