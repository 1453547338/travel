<template>
    <div class="header">
        <router-link to="/City">
         <div class="header-left">
             <span class="iconfont">&#xe624;</span>
             {{this.$store.state.city}}
         </div>
        </router-link>
        <div class="header-center">
            <input type="text" value="输入城市">
        </div>

            <div class="header-right">
                <router-link tag="div" to="/login"> <span class="iconfont"> &#xe64a; 登陆</span></router-link>
            </div>

    </div>
</template>

<script>
    export default {
        name: "Header",
        // props:{
        //     city:String
        // },
        mounted (){
            // console.log(this.city+'dsad')
        }
    }
</script>

<style scoped lang="stylus">
    @import "../../../assets/styles/variable.styl"
    .header
        display flex
        height 0.65rem
        line-height 0.65rem
        background $color-background
        .header-left
            float left
            width 1.2rem
            color #fff
            font-size 0.28rem
            text-align center
        .header-center
            float left
            flex 1
            input
                 width:3.65rem
                 height 0.4rem
                 border-radius 2px
                 color: #dcd8df;
                 font-size 0.14rem
                 padding-left 0.3rem

        .header-right
            float left
            width 1.6rem
            font-size 0.18rem
            color #fff
            text-align center
</style>