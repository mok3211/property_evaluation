<template>
  <div class="Login">
    <el-row align="middle">
      <el-col>
        <div class="title">登录</div>
      </el-col>
      <el-divider />
      <el-col>
        <div class="form">
          <el-form :mode="incomeMethodFormData">
            <el-form-item label-width="100px" label="账号:" prop="userName">
              <el-input
                v-mode="incomeMethodFormData.userName"
                placeholder="请输入登录账号"
              ></el-input>
            </el-form-item>
            <el-form-item label-width="100px" label="密码:" prop="password">
              <el-input
                v-mode="incomeMethodFormData.password"
                placeholder="请输入登录密码"
              ></el-input>
            </el-form-item>
            <div class="btn-confirm">
              <el-button
                type="primary"
                style="width: 80%; height: 40px; justify-content: center"
                @click="login"
                >登录</el-button
              >
            </div>
          </el-form>
        </div>
      </el-col>
    </el-row>
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
  justify-content: center;
  align-items: center;
}
.title {
  height: 50px;
  text-align: center;
  font-size: 28px;
  color: #000;
  text-align: center;
  margin-top: 20px;
}
.form {
  width: 100%;
  padding: 10px
}
.btn-confirm {
  width: 200px;
  margin: 0 auto;
}
</style>
