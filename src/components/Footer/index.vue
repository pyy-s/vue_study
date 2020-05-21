<template>
    <div class="infooter">
        <div class="left">
            <el-tag size="mini" type="success">外卖开启</el-tag>
            <div>商城路店</div>
            <div>自营@9909</div>
            <div>美团@9906</div>
            <div>
                <span>❤</span> 监听新订单
            </div>
        </div>
        <div class="right">
            <el-button type="success">门店设置</el-button>
            <el-button type="warning" @click="handleQuit">退出登录</el-button>
        </div>
    </div>
</template>

<script lang='ts'>
import Vue from 'vue'
import { login } from '@/network/login'

export default Vue.extend({
    name: 'infooter',
    data() {
        return {}
    },
    methods: {
        handleQuit() {
            ;(this as any)
                .$confirm('确认退出?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                })
                .then(() => {
                    localStorage.clear()
                    this.$router.push('login')
                })
                .catch(() => {})
        }
    }
})
</script>

<style lang="less">
.infooter {
    display: flex;
    height: 100%;
    align-items: center;
    .left {
        flex: 2;
        display: flex;
        padding-left: 20px;
        div {
            color: #fff;
            font-size: 14px;
            margin-left: 20px;
            &:last-child {
                color: rgb(7, 193, 96);
                span {
                    color: red;
                }
            }
        }
    }
    .right {
        button {
            margin-right: 20px;
        }
    }
}
</style>