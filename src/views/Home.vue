<template>
    <div class="home">
        <div class="top"></div>

        <div class="footer">
            <Footer />
        </div>
    </div>
</template>

<script>
import Vue from 'vue'
import Footer from '@/components/Footer/index'

export default Vue.extend({
    name: 'Home',
    data() {
        return {}
    },
    components: {
        Footer
    },
    methods: {}
})
</script>

<style lang="less">
.home {
    padding: 64px 0;
    .top {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        height: 64px;
        background-color: #212529;
    }
    .footer {
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        height: 64px;
        background-color: #212529;
    }
}
</style>