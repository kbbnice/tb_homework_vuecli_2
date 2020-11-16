<template>
  <div class="my-menu">
    <el-menu
      :default-active="pathList[1].children[1].path"
      class="el-menu-vertical-demo"
      background-color="#5f35d1"
      text-color="#fff"
      active-text-color="rgb(126, 189, 255)"
      :unique-opened="true"
    >
      <el-submenu v-for="(subList, subIndex) in pathList" :key="subList.uid" :index="subList.path">
        <template slot="title">
          <i class="el-icon-menu"></i>
          <span>{{ subList.name }}</span>
        </template>

        <el-menu-item
          :index="item.path"
          v-for="(item, index) in subList.children"
          :key="item.id"
          @click="handleSelect(subIndex, index)"
        >
          <template slot="title">
            <i class="el-icon-menu"></i>
            <span>{{ item.name }}</span>
          </template>
        </el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pathList: [
        // {
        //   path: '/course',
        //   name: '课程管理',
        //   children: [
        //     {
        //       name: '必修课',
        //       path: '/required',
        //     },
        //     {
        //       name: '选修课',
        //       path: '/elective',
        //     },
        //   ],
        // },
        {
          path: '/member',
          name: '成员管理',
          children: [
            {
              name: '老师管理',
              path: '/teacher',
            },
            {
              name: '学生管理',
              path: '/student',
            },
          ],
        },
         {
          path: '/settings',
          name: '个人中心',
          children: [
            {
              name: '密码修改',
              path: '/password',
            },
            {
              name: '个人信息',
              path: '/info',
            },
          ],
        },
      ],
    }
  },
  methods: {
    handleSelect(subIndex, index) {
      this.$router.push(this.getPath(subIndex, index))
      this.$store.dispatch('changePathFun', this.getName(subIndex, index))
    },

    // 获取跳转路由
    getPath(subIndex, index) {
      return (
        this.pathList[subIndex].path +
        this.pathList[subIndex].children[index].path
      )
    },

    // 获取课程名称
    getName(subIndex, index) {
      return (
        this.pathList[subIndex].name +
        '/' +
        this.pathList[subIndex].children[index].name
      )
    },
  },
}
</script>

<style lang="less">
.el-menu {
  width: 280px;
  overflow-x: hidden;
}
</style>