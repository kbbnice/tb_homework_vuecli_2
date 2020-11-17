<template>
  <div class="index">
    <el-container>
      <el-aside width="250px">
        <el-menu
          default-active="/course/list"
          class="el-menu-vertical-demo"
          background-color="#349e66"
          @select="handleSelect"
          text-color="#fff"
          active-text-color="rgb(193 245 137)"
          :unique-opened="true"
          :router="true"
        >
          <el-menu-item index="/">
            <template slot="title">
              <i class="el-icon-menu"></i>
              <span>首页</span>
            </template>
          </el-menu-item>
          <el-submenu index="/course/list">
            <template slot="title">
              <i class="el-icon-menu"></i>
              <span>课程管理</span>
            </template>

            <el-menu-item index="/course/list">
              <template slot="title">
                <i class="el-icon-menu"></i>
                <span>课程列表</span>
              </template>
            </el-menu-item>
            <el-menu-item index="/course/add">
              <template slot="title">
                <i class="el-icon-menu"></i>
                <span>添加课程</span>
              </template>
            </el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-container>
        <el-header>
          <span class="title">学生课程管理</span>
          <span class="logout-btn" @click="logout">退出</span>
        </el-header>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "Index",
  data() {
    return {};
  },
  methods: {
    handleSelect() {
      console.log(111);
    },
    logout() {
      this.$router.push("/login");
    },
  },
  created() {},
};
</script>

<style lang="less" scoped>
.el-header {
  color: #333;
  line-height: 60px;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  height: 60px;
  box-shadow: 0 0 5px rgba(4, 107, 0, 0.473) inset;
  background: #349e66;

  .title {
    font-size: 30px;
    color: #fff;
    font-weight: bold;
  }
  .logout-btn {
    line-height: 60px;
    float: right;
    color: #fff;
    font-size: 18px;
    cursor: pointer;
    &:hover {
      color: #eee;
    }
  }
  &::after {
    content: " ";
    display: block;
    clear: both;
  }
}

.el-aside {
  color: #333;
  background-color: #349e66;
  text-align: left;
  position: fixed;
  left: 0;
  width: 250px;
  top: 60px;
  bottom: 0;
  overflow-x: hidden;
  overflow-y: auto;
  .el-menu {
    width: 250px;
    overflow-x: hidden;
    overflow-y: auto;
  }
}

.el-main {
  position: fixed;
  top: 60px;
  bottom: 0;
  left: 250px;
  right: 0;
  color: #333;
  background: rgba(200, 255, 163, 0.45);
}
</style>
