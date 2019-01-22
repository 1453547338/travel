<template>
    <!-- ref获取DOM -->
    <div class="list" ref="wrapper">

        <div>
       <div class="area">
           <div class="title border-topbottom">当前城市</div>
           <div class="button-list">
               <div class="button-wrapper">
                   <div class="button">北京</div>
               </div>

           </div>
       </div>
        <div class="area">
            <div class="title border-topbottom">热门城市</div>
            <div class="button-list">
                <div class="button-wrapper" v-for="list of hot" :key="list.id">
                    <div class="button">{{list.name}}</div>
                </div>
            </div>
        </div>
        <div class="area" v-for="(item,key) of cities" :key="key">
            <div class="title border-topbottom">{{key}}</div>
                <div class="item-list" v-for="innerItem of item" :key="innerItem.id">
                    <div class="item border-bottom">{{innerItem.name}}</div>
                </div>
        </div>

        </div>
    </div>
</template>

<script>
    import Bscroll from 'better-scroll'
    export default {
        name: "List",
        components:{

        },
        props:{
            hot:Array,
            cities:Object

        },
        mounted () {
            this.scroll = new Bscroll(this.$refs.wrapper)
        }
    }
</script>

<style scoped lang="stylus">
    .border-topbottom
        &:before
            content ''
            border-color #ccc
        &:after
            content ''
            border-color #ccc
    .border-bottom
           &:before
             content ''
             border-bottom 0.01rem solid red
    .list
        overflow hidden
        position absolute
        top:1.58rem
        left 0
        right 0
        bottom 0

    .title
        line-height .54rem
        background-color #eee
        padding-left .2rem
        color #666
        font-size 0.26rem
    .button-list
        overflow hidden
        padding .1rem .6rem .1rem .1rem
        .button-wrapper
            float left
            width 33.33%
            .button
                margin .1rem
                text-align center
                border 0.02rem solid #ccc
                padding .1rem 0
                border-radius 0.08rem
                font-size 0.24rem
    .item-list
        .item
            line-height 0.76rem
            padding-left .2rem
            font-size 0.22rem
            border-bottom 0.01rem solid #eee



</style>