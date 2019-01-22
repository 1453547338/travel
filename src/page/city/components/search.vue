<template>
    <div class="search">
        <input type="text" class="search-input" placeholder="输入城市名或拼音">
    </div>
</template>

<script>
    export default {
        name: "search"
    }
</script>

<style scoped lang="stylus">
    .search
        header 0.72rem
        padding .1rem
        background-color #25a4bb
        .search-input
            width: 100%
            header: 0.62rem
            line-height:0.62rem
            text-align center
            border-radius 0.06rem
            padding 0 .1rem
            box-sizing border-box
            font-size 0.22rem
</style>