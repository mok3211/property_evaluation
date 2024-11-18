<template>
  <div class="Login">
    <el-row>
      <el-col>
        <div class="title">登录 </div>
      </el-col>
    </el-row>
      <el-divider />
    <el-row>
      <el-col :span="22">
        <el-form :model="incomeMethodFormData" :rule="rule">
          <el-form-item label-width="100px" label="账号:">
            <el-input
              v-model="incomeMethodFormData.userName"
              placeholder="请输入登录账号"
            />
          </el-form-item>
          <el-form-item label-width="100px" label="密码:">
            <el-input
              v-model="incomeMethodFormData.password"
              placeholder="请输入登录密码"
              type="password"
              autocomplete="off"
            ></el-input>
          </el-form-item>
        </el-form>
      </el-col>
      <el-col :span="2">
      </el-col>
    </el-row>
      <el-col>
        <div class="btn-confirm">
          <el-button
            type="primary"
            style="width: 80%; height: 40px; justify-content: center"
            @click="login"
            >登录</el-button>
        </div>
      </el-col>
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
.btn-confirm {
  width: 200px;
  margin: 0 auto;
  margin-top: 50px;
}
</style>
