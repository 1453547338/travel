<template>
    <div class="icons">
       <swiper>
        <swiper-slide v-for="(page,index) of pages" :key="index">
            <div class="icon" v-for="icon of list">
                <div class="icon-img"><img class='icon-img-content' :src="icon.imgUrl" alt=""></div>
                <p class="icon-desc">{{icon.desc}}</p>
            </div>
        </swiper-slide>
      </swiper>
    </div>
</template>

<script>
    import { swiper, swiperSlide } from 'vue-awesome-swiper'
    export default {
        name: "Icons",
        props:{
            list:Array
        },
        components: {
            swiper,
            swiperSlide
        },
        data () {
            return{

        }
     },
        computed:{
            pages () {
                const pages = []
                this.list.forEach((item,index) => {
                    const page = Math.floor(index / 8)
                    if (!pages[page]){
                        pages[page] = []
                    }
                    pages[page].push(item)
                })

                return pages
            }
        }

    }
</script>

<style scoped lang="stylus">
    @import "../../../assets/styles/mixins.styl"
    .icons >>> .swiper-container
        height 0
        padding-bottom 50%
    .icons
        margin 0.1rem 0
       .icon
          position:relative
          overflow hidden
          float:left
          width 25%
          height 0
          padding-bottom 25%
          .icon-img
             position absolute
             top:0
             left:0
             right 0
             bottom:0.44rem
             box-sizing:border-box
             padding:0.1rem
            .icon-img-content
               display block
               margin 0 auto
               height 100%
          .icon-desc
               position absolute
               left:0
               right:0
               bottom:0
               height 0.44rem
               line-height 0.44rem
               text-align center
               colo:$darkTextColor
               font-size 0.18rem
               ellipse()

</style>
