<template>
  <div style="padding:32px 64px">
    <h1>可编辑单元格</h1>
    <Table :columns="columns" :data="data" border></Table>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data () {
    return {
      editIndex: -1,
      editValue: '',
      columns: [
        {
          title: '姓名',
          key: 'name',
          render: (h, { row, index }) => {
            let edit;
            let control;
            if (this.editIndex === index) {
              edit = [h('Input', {
                props: {
                  value: row.name
                },
                on: {
                  input: (val) => {
                    this.editValue = val
                  }
                }
              })]
              control = [
                h('Icon', {
                  style: {
                    cursor: 'pointer',
                    margin: '8px'
                  },
                  props: {
                    type: 'md-checkmark',
                    size: 16,
                    color: '#19be6b'
                  },
                  on: {
                    click: () => {
                      this.data[index].name = this.editValue
                      this.editIndex = -1
                    }
                  }
                }),
                h('Icon', {
                  style: {
                    cursor: 'pointer',
                    margin: '8px'
                  },
                  props: {
                    type: 'md-close',
                    size: 16,
                    color: '#ed4014'
                  },
                  on: {
                    click: () => {
                      this.editIndex = -1
                    }
                  }
                })
              ]
            } else {
              edit = row.name
              control = [h('Icon', {
                style: {
                  cursor: 'pointer'
                },
                props: {
                  type: 'ios-create-outline',
                  size: 16
                },
                on: {
                  click: () => {
                    this.editIndex = index
                    this.editValue = row.name
                  }
                }
              })]
            }
            return h('Row', [
              h('Col', {
                props: {
                  span: 18
                }
              }, edit),
              h('Col', {
                props: {
                  span: 6
                }
              }, control),
            ])
          }
        }, {
          title: '年龄',
          key: 'age'
        }, {
          title: '地址',
          key: 'address'
        }
      ],
      data: [
        {
          name: 'John Brown',
          age: 18,
          address: 'new York',
          date: '2016-10-03'

        },
        {
          name: 'John Brown',
          age: 19,
          address: 'new York',
          date: '2016-10-03'

        },
        {
          name: 'John Brown',
          age: 18,
          address: 'new York',
          date: '2016-10-03'

        },
        {
          name: 'John Brown',
          age: 18,
          address: 'new York',
          date: '2016-10-03'

        }
      ]
    }
  },
  components: {

  }
}
</script>

<style scoped lang="scss">
</style>