<template>
  <div style="padding:32px 64px">
    <h1>服务端分页并排，过滤</h1>
    <Table
      :columns="columns"
      :data="data"
      :loading="loading"
      border
      size="small"
      @on-sort-change="handleSort"
      @on-filter-change="handleFilter"
    ></Table>
    <div style="text-align:center;margin:16px 0">
      <Page :total="total" :current.sync="current" @on-change="getData"></Page>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import $ from '../libs/util'
export default {
  data () {
    return {
      total: 0,
      current: 1,
      loading: false,
      sortType: 'normal', // asc desc
      filterType: undefined, //1 2,
      columns: [
        {
          title: '号码',
          key: 'number',
          sortable: 'custom'
        },
        {
          title: '等级',
          key: 'status',
          render: (h, { row }) => {
            if (row.status === 1) {
              return h('Tag', {
                props: {
                  color: 'green'
                }
              }, '等级 1');
            } else {
              return h('Tag', {
                props: {
                  color: 'red'
                }
              }, '等级 2');
            }
          },
          filters: [
            {
              label: '级别1',
              value: 1
            }, {
              label: '级别2',
              value: 2
            }
          ],
          filterMultiple: false,
          /* filterMethod (value, row) {
            if (value === 1) {
              return row.status === 1;
            } else if (value === 2) {
              return row.status === 2
            }
          } */
          filterRemote (value) {
            this.filterType = value[0]
          }
        }
      ],
      data: [

      ]
    }
  },
  methods: {
    handleSort ({ columns, key, order }) {
      this.sortType = order;
      this.current = 1
      this.getData()
    },
    handleFilter () {
      this.current = 1
      this.getData()
    },
    getData () {
      if (this.loading) return;
      this.loading = true;
      $.ajax({
        method: 'get',
        url: `/data/list/${this.current}/${this.sortType}/${this.filterType}`
      }).then(res => {
        this.data = res.data.data.list
        this.total = res.data.data.total
        this.loading = false;
      })
    }
  },
  mounted () {
    this.getData()
  },
  components: {

  }
}
</script>

<style scoped lang="scss">
</style>