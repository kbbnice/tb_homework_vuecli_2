<template>
  <div class="settings-info">
    <div class="info-item" v-for="item in infoList" :key="item.uid">
      <div class="label">{{item.label}}:</div>
      <div class="info-detail">{{item.value}}</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  computed: {
    infoList() {
      let infoList = this.Mock.mock([
        {
          label: '姓名',
          value: '@cname',
        },
        {
          label: '性别',
          value: function () {
            return Math.floor(Math.random() + 0.5) == 1 ? '男' : '女'
          },
        },
        {
          label: '学号',
          value: 'C10000000',
        },
        {
          label: '电话',
          value: function(){

              let num = "152";
              for(let i = 0; i < 8; i++) {
                  num += parseInt(Math.random() * 10)
              }
              return num
          },
        },
        // {
        //   label: '姓名',
        //   value: '@cname',
        // },
        // {
        //   label: '姓名',
        //   value: '@cname',
        // },
        {
          label: '住址',
          value: '@county(true)',
        },
      ])

      return infoList
    },
  },
}
</script>

<style lang="less">
.settings-info {
  background: #fff;
  border-radius: 10px;
  .info-item {
    height: 40px;
    line-height: 40px;
    .label {
      display: inline-block;
      width: 100px;
      letter-spacing: 5px;
      text-align: right;
      padding-right: 10px;
    }
    .info-detail {
      display: inline-block;
    }
  }
}
</style>