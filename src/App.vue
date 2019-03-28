<template>
  <div id="app">
    <Row>
      <Col :xs="{span:24,offset:0}" :sm="{span:6,offset:1}">
        <Card>
          <div style="height:200px"></div>
        </Card>
      </Col>
      <Col :xs="{span:24,offset:0}" :sm="{span:16,offset:0}">
        <Card>
          <div style="height:800px"></div>
        </Card>
      </Col>
    </Row>
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
body {
  height: 5000px;
  background: #f8f8f9 !important;
}
</style>