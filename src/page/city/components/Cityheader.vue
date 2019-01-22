<template>
    <div class="header">
        <router-link to="/">
        <span class="iconfont header-iconfont">&#xe624;</span>
        </router-link>
        城市选择
    </div>
</template>

<script>
    export default {
        name: "Cityheader"
    }
</script>

<style scoped lang="stylus">
    .header
        height 0.6rem
        background-color #25a4bb
        text-align center
        line-height 0.6rem
        color #fff
        position relative
        .header-iconfont
            position: absolute
            left 0.2rem
            color #fff


</style>