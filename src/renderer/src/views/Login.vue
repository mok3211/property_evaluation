<template>
  <div class="Login">
    <div class="title">账号注册</div>
    <div class="form">
      <el-form :mode="incomeMethodFormData">
        <el-form-item label-width="100px" label="登录账号:" prop="userName">
          <el-input v-mode="incomeMethodFormData.userName" placeholder="请输入登录账号"></el-input>
        </el-form-item>
        <el-form-item label-width="100px" label="登录密码:" prop="password">
          <el-input v-mode="incomeMethodFormData.password" placeholder="请输入登录密码"></el-input>
        </el-form-item>
        <div class="btn-confirm">
          <el-button
            type="primary"
            style="width: 100%; height: 40px; margin-top: 20px"
            @click="login"
            >注册</el-button
          >
        </div>
      </el-form>
    </div>
  </div>
</template>
<script setup lang="ts">
import { reactive } from 'vue'
// 设置倒计时的秒数
const incomeMethodFormData = reactive({
  userName: '',
  password: ''
})
function login() {
  return true
}
</script>
<style scoped>
.Login {
  background: #fff;
  height: 100%;
}

.title {
  height: 50px;
  text-align: center;
  font-size: 24px;
  color: #000;
}

.form {
  width: 80%;
  margin: 20px auto 0;
}

.itemInput {
  width: 100%;
  height: 35px;
  display: flex;
}

.codeStyle {
  width: 40%;
  font-size: 12px;
  line-height: 35px;
  color: blue;
  font-weight: 700;
  text-align: center;
}

.btn-confirm {
  width: 200px;
  margin: 0 auto;
}
</style>
<style scoped>
.Login {
  background: #fff;
  height: 100%;
}

.title {
  height: 50px;
  text-align: center;
  font-size: 24px;
  color: #000;
}

.form {
  width: 80%;
  margin: 20px auto 0;
}

.itemInput {
  width: 100%;
  height: 35px;
  display: flex;
}

.codeStyle {
  width: 40%;
  font-size: 12px;
  line-height: 35px;
  color: blue;
  font-weight: 700;
  text-align: center;
}

.btn-confirm {
  width: 200px;
  margin: 0 auto;
}
</style>
