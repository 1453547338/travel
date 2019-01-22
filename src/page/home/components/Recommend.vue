<template>
    <div>
    <div class="title">热销推荐</div>
    <ul v-for="item in recommendList" :key="item.id">

        <li class="item border-bottom">
                <img :src="item.imgUrl" alt="" class="item-img">

            <div class="item-info">
                <p class="item-title">{{item.title}}</p>
                <p class="item-desc">{{item.desc}}</p>
                <button class="item-button">查看详情</button>
            </div>
        </li>
    </ul>

    </div>
</template>

<script>
    export default {
        name: "Recommend",
        // 定义循环得数组
        data(){
            return{
                recommendList:[{
                    id:'001',
                    imgUrl:'http://img1.qunarzz.com/sight/p0/1712/95/95f38f28a6ff19cba3.img.jpg_200x200_af967e35.jpg',
                    title:'水奥雪世界',
                    desc:'水奥雪世界五星级'
                },{
                    id:'002',
                    imgUrl:'http://img1.qunarzz.com/sight/p0/1712/95/95f38f28a6ff19cba3.img.jpg_200x200_af967e35.jpg',
                    title:'水奥雪世界2',
                    desc:'水奥雪世界五星级222'
                    },{
                    id:'003',
                    imgUrl:'http://img1.qunarzz.com/sight/p0/1712/95/95f38f28a6ff19cba3.img.jpg_200x200_af967e35.jpg',
                    title:'水奥雪世界3',
                    desc:'水奥雪世界五星级333'
                }
                ]
            }
        }
    }
</script>

<style scoped lang="stylus">
    @import "../../../assets/styles/mixins.styl"
    .title
        margin-top 0.2rem
        line-height 0.8rem
        background #eee
        text-indent 0.2rem
    .item
        display flex
        height 1.9rem
        overflow hidden
        .item-img
            width 1.7rem
            height:1.7rem
            padding .1rem
        .item-info
            flex 1
            padding 0.1rem
            min-width 0
            .item-title
                line-height 0.54rem
                font-size 0.32rem
                ellipse()
            .item-desc
                line-height .4rem
                color #D88DFF
                ellipse()
            .item-button
                background #ff9300
                margin-top .16rem
                padding 0 .2rem
                border-radius .06rem
                color #fff
                line-height 0.44rem

</style>