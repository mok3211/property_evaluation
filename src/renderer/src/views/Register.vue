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
                <el-form-item label-width="100px" label="手机号码:" prop="phone">
                    <el-input v-mode="incomeMethodFormData.phone" placeholder="请输入手机号码"></el-input>
                </el-form-item>

                <el-form-item label-width="100px" label="验证码:" prop="code">
                    <div class="itemInput">
                        <el-input style="60%" v-mode="incomeMethodFormData.code" placeholder="请输入验证码"></el-input>
                        <span class="codeStyle" @click="countdown()">{{ count == 60 ? codeName : count + '秒' }}</span>
                    </div>
                </el-form-item>
                <div class="btn-confirm">
                    <el-button type="primary" style="width: 100%; height: 40px; margin-top: 20px"
                        @click="saveIncomeMethodData">注册
                    </el-button> 
                </div>
            </el-form>
        </div>
    </div>
</template>
<script setup lang="ts">
import { reactive, ref } from 'vue'
// 设置倒计时的秒数
var count = ref(60);
var codeName = ref("手机验证码")
var incomeMethodFormData = reactive({
    userName: '',
    password: '',
    phone: '',
    code: ' '
})
// 更新倒计时的函数
function countdown() {
    // 如果count大于0，则继续倒计时
    if (count.value > 0) {
        // 输出剩余时间，并减少秒数
        count.value
        count.value--;
        // 每秒调用一次countdown函数
        setTimeout(countdown, 1000);
    } else {
        // 时间到，重新设置倒计时秒数
        count.value = 60;
    }
}
 
</script>
<style scoped>
	.Login {
        background:#fff;
		height: 100%;
	}
	.title{
        height:50px;
		text-align: center;
		font-size: 24px;
		color: #000;
	}
    .form{
        width:80%;
        margin:20px auto 0;
    }
    .itemInput{
        width:100%;
        height:35px;
        display:flex;
    }
    .codeStyle{
        width:40%;
        font-size:12px;
        line-height:35px;
        color:blue;
        font-weight:700;    
        text-align:center;
    }
    .btn-confirm{
        width:200px;
        margin:0 auto;
    }
</style>