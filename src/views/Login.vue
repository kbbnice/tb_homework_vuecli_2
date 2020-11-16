<template>
  <div class="login">
    <div class="login-wrap">
      <h1 class="login-title">学校后台管理系统</h1>
      <div class="login-box">
        <div class="login-form">
          <!-- 用户名 -->
          <div class="login-item">
            <input
              type="text"
              id="uname"
              placeholder="username"
              v-model="loginData.name"
            />
          </div>

          <!-- 密码 -->
          <div class="login-item">
            <input
              type="password"
              id="pwd"
              placeholder="password"
              v-model="loginData.pwd"
            />
          </div>
        </div>

        <!-- 登录 -->
        <div class="login-btn" @click="submit()">登&nbsp;录</div>
      </div>
    </div>
  </div>
</template>

<script>
import { fetchLogin } from "@/mock";

export default {
  name: "login",
  data() {
    return {
      loginData: {
        name: "",
        pwd: "",
      },
    };
  },
  mounted() {},
  methods: {
    // 提交表单
    submit() {
      let that = this;

      // mock 拦截 login 请求
      fetchLogin()

      //  登录请求
      that.axios
        .post("/fetchLogin", {
          username: that.loginData.name,
          password: that.loginData.pwd,
        })
        .then((res) => {
          // 登录成功：
          if (res.data.state === "ok") {
            that.setStorage("userInfo", res.data.userInfo);
            that.$message({
              message: "登录成功",
              type: "success",
            });
            setTimeout(() => {
              that.$router.push("/");
            }, 500);
          } else {
            that.$message({
              message: "登录失败",
              type: "error",
            });
          }
        });
    },

    // 设置 localstorage:
    setStorage(key, value) {
      window.localStorage.setItem(key, JSON.stringify(value));
    },
  },
  created() {},
};
</script>

<style lang="less" scoped>
.login {
  .login-wrap {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    overflow-y: scroll;
    background: #349e66;
    z-index: 2;
    .login-title {
      color: #fff;
      font-size: 40px;
      line-height: 40px;
      position: relative;
      top: 150px;
      text-align: center;
    }
    .login-box {
      background: rgba(255, 255, 255, 0.7);
      border-radius: 5px;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      padding: 40px 30px 30px;
      .login-form {
        margin-bottom: 50px;
        .login-item {
          margin-bottom: 30px;
          font-size: 16px;
          line-height: 22px;

          input {
            display: inline-block;
            width: 280px;
            border: none;
            background: transparent;
            border-bottom: 1px solid #999;
            &:focus {
              border-bottom: 1px solid #349e66;
            }
          }
        }
      }

      .login-btn {
        margin: 0 auto;
        background: #349e66;
        color: #fff;
        box-shadow: 0 0 6px rgba(0, 0, 0, 0.3);
        text-align: center;
        font-size: 16px;
        line-height: 40px;
        border-radius: 5px;
        cursor: pointer;
      }
    }
  }
}
</style>