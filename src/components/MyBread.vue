<template>
  <div class="my-bread">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{path: '/'}" @click="toPath">首页</el-breadcrumb-item>
      <el-breadcrumb-item v-for="item in urlList" :key="item.uid" v-show="item">{{item}}</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script>
export default {
    name: 'my-bread',
    data() {
        return {
            urlList: []
        }
    },
    computed: {
        url() {
            let url =  this.$store.state.curPath
            this.urlList = url.split('/')
            return url
        }
    },
    methods: {
        toPath() {
            
            this.$store.dispatch('changePathFun', {
                meta: {
                    title: '首页',
                    parentTitle: ''
                }
            })      
        }
    },
    created() {
        
    },
    watch: {
        
       url (newData, oldData){
            console.log(newData)
        }
    }
}
</script>