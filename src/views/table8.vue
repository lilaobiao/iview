<template>
  <div>
    <h1>初始化时应用过滤，并持久化存贮</h1>
    <Table border :columns="columns" :data="data" @on-filter-change="handleFilterChange"></Table>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data () {
    const filterAge = localStorage.getItem('table-demo-filter-age')
    const filterAddress = localStorage.getItem('table-demo-filter-address')
    let filterAgeValue = [2]
    let filterAddressValue = ['London', 'Sydney']
    if (filterAge) filterAgeValue = JSON.parse(filterAge)
    if (filterAddress) filterAddressValue = JSON.parse(filterAddress)
    const column = [
        {
          title: 'Date',
          key: 'date'
        },
        {
          title: 'Name',
          key: 'name'
        },
        {
          title: 'Age',
          key: 'age',
          filters: [
            {
              label: 'Greater than 25',
              value: 1
            },
            {
              label: 'Less than 25',
              value: 2
            }
          ],
          filterMultiple: false,
          filterMethod (value, row) {
            if (value === 1) {
              return row.age > 25;
            } else if (value === 2) {
              return row.age < 25;
            }
          },
        },
        {
          title: 'Address',
          key: 'address',
          filters: [
            {
              label: 'New York',
              value: 'New York'
            },
            {
              label: 'London',
              value: 'London'
            },
            {
              label: 'Sydney',
              value: 'Sydney'
            }
          ],
          filterMethod (value, row) {
            return row.address.indexOf(value) > -1;
          },
        }
      ]
      if(filterAgeValue.length) column[1].filteredValue = filterAgeValue
      if(filterAddressValue.length) column[2].filteredValue = filterAddressValue
    return {
      columns: column,
      data: [
        {
          name: 'John Brown',
          age: 18,
          address: 'New York No. 1 Lake Park',
          date: '2016-10-03'
        },
        {
          name: 'Jim Green',
          age: 24,
          address: 'London No. 1 Lake Park',
          date: '2016-10-01'
        },
        {
          name: 'Joe Black',
          age: 30,
          address: 'Sydney No. 1 Lake Park',
          date: '2016-10-02'
        },
        {
          name: 'Jon Snow',
          age: 26,
          address: 'Ottawa No. 2 Lake Park',
          date: '2016-10-04'
        }
      ],
    }
  },
  methods: {
    handleFilterChange (col) {
      const filterChecked = col._filterChecked
      const key = col.key
      localStorage.setItem(`table-demo-filter-${key}`, JSON.stringify(filterChecked))
    }
  }
}
</script>

<style scoped lang="scss">
</style>