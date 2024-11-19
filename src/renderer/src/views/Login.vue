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
        <el-form :model="loginFormData" :rules="rules" ref="ruleFormRef" status-icon=true>
          <el-form-item label-width="100px" label="账号:" prop="userName">
            <el-input
              v-model="loginFormData.userName"
              placeholder="请输入登录账号"
            />
          </el-form-item>
          <el-form-item label-width="100px" label="密码:" prop="passWord">
            <el-input
              v-model="loginFormData.passWord"
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
            @click="login(ruleFormRef)"
            >登录</el-button>
        </div>
      </el-col>
  </div>
</template>
<script setup lang="ts">
import { reactive, ref } from 'vue'
import { removeSpaces } from "../utils/common"
import type { FormInstance, FormRules } from 'element-plus'

const ruleFormRef = ref<FormInstance>()
// 设置倒计时的秒数
const loginFormData = reactive({
  userName: '',
  passWord: ''
})


const validateUserName = (_rule: any, value: any, callback: any) => {
  value = removeSpaces(value)
  loginFormData.userName = removeSpaces(loginFormData.userName)
  if (value === '') {
    callback(new Error("请输入用户名"))
  } else {
    if (loginFormData.userName !== '') {
      if(!ruleFormRef.value) return
      ruleFormRef.value.validateField('checkPass')
    }
    callback()
  }
}

const validatePassWord = (_rule: any, value: any, callback: any) => {
  value = removeSpaces(value)
  loginFormData.passWord = removeSpaces(loginFormData.passWord)
  if (value === '') {
    callback(new Error("请输入密码"))
  }else {
    if (loginFormData.passWord.length<=8 || loginFormData.passWord.length>10) {
      callback(new Error("密码的长度8位到10位之间"))
    }
    if(!ruleFormRef.value) return
    ruleFormRef.value.validateField('checkPass')
    callback()
  } 
}

const rules = reactive<FormRules<typeof loginFormData>>({
  userName: [{ validator: validateUserName, trigger: 'blur', required: true}],
  passWord: [{ validator: validatePassWord, trigger: 'blur', required: true}],
})

const login = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.validate((valid) => {
    if(valid) {
      
    }
  })
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
