<template>
  <div id="app">
    <Row type="flex" justify="center" align="middle">
      <Col span="4">
        <Avatar src="https://i.loli.net/2017/08/21/599a521472424.jpg"></Avatar>
      </Col>
      <Col span="18">
        <div>支持三种类型：图片、Icon 以及字符，其中 Icon 和字符型可以自定义图标颜色及背景色。</div>
        <div>支持三种类型：图片、Icon 以及字符，其中 Icon 和字符型可以自定义图标颜色及背景色。</div>
        <div>支持三种类型：图片、Icon 以及字符，其中 Icon 和字符型可以自定义图标颜色及背景色。</div>
      </Col>
      <Col span="2">
        <Icon type="ios-checkmark" color="#2d8cf0" size="28"></Icon>
      </Col>
    </Row>
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
  height: 5000px;
  background: #f8f8f9 !important;
}
</style>