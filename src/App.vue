<template>
  <div id="app">
    <div id="nav">
      <!-- <router-link to="/">Home</router-link>|
      <router-link to="/about">About</router-link>-->
      <!-- <Menu :active-name="activeName">
        <MenuItem to="/" name="/">Home</MenuItem>
        <MenuItem to="/about" name="/about" replace>About</MenuItem>
        <MenuItem to="/login" name="/login">login</MenuItem>
        <MenuItem to="/admin" name="/admin">admin</MenuItem>
      </Menu> -->
      <Row>
        <i-col v-for="n in 24">

        </i-col>
      </Row>
    </div>
    <router-view/>
  </div>
</template>
<script>
export default {
  data () {
    return {
      activeName: this.$route.path
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
body {
  background: #f8f8f9 !important;
}
</style>