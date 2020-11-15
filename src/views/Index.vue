<template>
  <div class="home">
    <el-container>
      <el-aside width="280px">
        <Menu></Menu>
      </el-aside>
      <el-container>
        <el-header>
          <MyBread></MyBread>
        </el-header>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Menu from "@/components/Menu.vue";
import MyBread from "@/components/MyBread.vue";

export default {
  name: "Home",
  components: {
    Menu,
    MyBread
  },
  methods: {

  },
  created() {
    
  },
};
</script>

<style lang="less" scoped>
.el-header {
  color: #333;
  line-height: 60px;
  position: fixed;
  left: 280px;
  right: 0;
  top: 0;
  height: 60px;
  border-bottom: 1px solid #ccc;
  /deep/ .el-breadcrumb{
    line-height: 60px;
  }
}

.el-aside {
  color: #333;
  text-align: left;
  position: fixed;
  left: 0;
  width: 280px;
  top: 0;
  bottom: 0;
  overflow-x: hidden;
  overflow-y: auto;
  background-color: #5f35d1;
}

.el-main {
  color: #333;
  position: fixed;
  top: 60px;
  bottom: 0;
  left: 280px;
  right: 0;
}
</style>
