<template>
  <div style="padding:32px 64px">
    <h1>搜索过滤隐藏某列</h1>

    <Form inline :label-width="80">
      <FormItem label="主机名称:">
        <Input v-model="form.name" placeholder="名称" style="width:200px"/>
      </FormItem>
      <FormItem label="使用状态:">
        <Select v-model="form.status" placeholder="请选择" style="width:200px">
          <Option :value="1">运行中</Option>
          <Option :value="2">异常</Option>
        </Select>
      </FormItem>
      <Button type="primary" @click="getData" style="margin-right:8px">查询</Button>
      <Button @click="handleReset">重置</Button>
    </Form>
    <CheckboxGroup v-model="showColumns">
        <Checkbox :label="0">主机名称</Checkbox>
        <Checkbox :label="1">ip</Checkbox>
        <Checkbox :label="2">使用状态</Checkbox>
        <Checkbox :label="3">时间</Checkbox>
    </CheckboxGroup>
    <Button type="primary" icon="md-add" @click="openCreate = true">新建</Button>
    <Table :columns="filterColumns" :data="data" border :loading="loading" size="small"></Table>
    <Modal v-model="openCreate" title="新建主机">
      <Form>
        <FormItem>
          <Input v-model="create.name" placeholder="名称"/>
        </FormItem>
        <FormItem>
          <Input v-model="create.ip" placeholder="ip地址"/>
        </FormItem>
        <FormItem>
        <Select v-model="create.status" placeholder="请选择">
          <Option :value="1">运行中</Option>
          <Option :value="2">异常</Option>
        </Select>
         </FormItem>
        <FormItem>
            <DatePicker v-model="create.date" type="datetime" placeholder="最后更新时间" style="width:100%"></DatePicker>
        </FormItem>
      </Form>

      <Button slot="footer" type="primary" @click="handleCreate">创建</Button>
    </Modal>
  </div>
</template>

<script type="text/ecmascript-6">
import $ from '../libs/util'
export default {
  data () {
    return {
      loading: false,
      columns: [
        {
          title: '主机名称',
          key: 'name',
        }, {
          title: 'IP 地址',
          key: 'ip',
        }, {
          title: '使用状态',
          key: 'status',
          render: (h, { row }) => {
            if (row.status === 1) {
              return h('Badge', {
                props: {
                  status: 'processing',
                  text: '运行中'
                }
              })
            } else if (row.status === 2) {
              return h('Badge', {
                props: {
                  status: 'error',
                  text: '异常'
                }
              })
            }
          }
        },
        {
          title: '最后修改时间',
          key: 'date',
          render: (h, { row }) => {
            return h('Time', {
              props: {
                time: parseInt(row.date),
                type: 'datetime'
              }
            })
          }
        }
      ],
      data: [],
      form: {
        name: '',
        status: ''
      },
      openCreate: false,
      create: {
        name: '',
        ip: '',
        status: '',
        date: ''
      },
      isCreate:false,
      showColumns:[0,1,2,3]
    }
  },
  computed:{
    filterColumns(){
        const columns = [...this.columns]
        const filterColumns = []
        this.showColumns.sort().forEach(item => {
            filterColumns.push(columns[item])
        })
        return filterColumns
    }
  },
  methods: {
    getData () {
      if (this.loading) return;
      this.loading = true
      let url = '/host/list'
      if (this.form.name) url += `/name/${this.form.name}`;
      if (this.form.status) url += `/status/${this.form.status}`;
      $.ajax({
        method: 'get',
        url: url
      }).then(res => {
        this.data = res.data.data.list
        this.loading = false
      })
    },
    handleReset () {
      this.form.name = ''
      this.form.status = ''
      this.$nextTick(() => {
        this.getData()
      })
    },
    handleCreate(){
        if(this.isCreate) return;
        const name = this.create.name
        const ip = this.create.ip
        const status = this.create.status
        let date = this.create.date
        if(name === ''){
            this.$Message.error('请输入主机名称')
            return;
        }
        if(ip === ''){
            this.$Message.error('请输入ip地址')
            return;
        }
        if(status === ''){
            this.$Message.error('请输入使用状态')
            return;
        }
        if(date === ''){
            this.$Message.error('请输入日期')
            return;
        }else{
            date = (new Date(date)).getTime()
        }

        this.isCreate = true

        $.ajax({
            method:'post',
            url:'/host/create',
            data:{
                name,
                ip,
                status,
                date
            }
        }).then(res => {
            if(res.data.data.status === 'success'){
                const newData = {
                    name,
                    ip,
                    status,
                    date
                }
                this.data = [newData].concat(this.data)
                this.isCreate = false;
                this.openCreate = false
            }
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