<template>
    <div class="login">
        <el-form :model="formData" ref="loginForm" label-width="100px" class="form">
            <el-form-item
                prop="user"
                label="门店编号"
                :rules="[
                        { required: true, message: '请输入账号', trigger: 'blur' }
                    ]"
            >
                <el-input v-model="formData.user"></el-input>
            </el-form-item>
            <el-form-item
                prop="pwd"
                label="登录密码"
                :rules="{
                        required: true, message: '密码不能为空', trigger: 'blur'
                    }"
            >
                <el-input type="password" v-model="formData.pwd"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="warning" @click="handleSubmit">确认登录</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script lang='ts'>
import Vue from 'vue'
import { login } from '@/network/login'

export default Vue.extend({
    name: 'login',
    data() {
        return {
            formData: {
                user: '',
                pwd: ''
            }
        }
    },

    methods: {
        handleSubmit() {
            ;(<any>this.$refs['loginForm']).validate(async (valid: boolean) => {
                if (valid) {
                    let data = await login(this.formData)
                    if (!data.ret) {
                        ;(<any>this).$message.error(data.msg)
                    } else {
                        localStorage.setItem('ShopId', this.formData.user)
                        localStorage.setItem('token', data.token)
                        ;(<any>this.$refs['loginForm']).resetFields()
                        this.$router.push('/')
                    }
                } else {
                    return false
                }
            })
        }
    }
})
</script>

<style lang="less">
.login {
    background-image: url('../assets/img/login_bg.jpg');
    background-repeat: no-repeat;
    background-size: 100% 100%;
    min-width: 100%;
    min-height: 100vh;
    .form {
        width: 300px;
        background-color: #f5f5f5;
        padding: 30px;
        border-radius: 20px;
        box-shadow: 2px 2px #ccc;
        position: fixed;
        top: 30%;
        right: 16%;
    }
}
</style>