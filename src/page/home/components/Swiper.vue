<template>
    <div class="wraper">
    <swiper :options="swiperOption">
        <!-- slides -->
        <!--循环banner-->
        <swiper-slide v-for="item of swiperList" :key="item.id">
            <img class="swiper-img" :src="item.imgUrl" alt="">
        </swiper-slide>

        <!-- Optional controls -->
        <div class="swiper-pagination"  slot="pagination"></div>

    </swiper>
    </div>
</template>

<script>
    import { swiper, swiperSlide } from 'vue-awesome-swiper'

    export default {
        name: "Swiper",
        data () {
            return{
                swiperOption:{
                    pagination:'.swiper-pagination', //轮播小点点
                    loop:true   //插件支持轮播，。第一张滑倒最后一张
                },
                // banner图片
                swiperList:[{
                    id:'001',
                    imgUrl:'http://m.npx110.org/images/308.jpg'
                },{
                    id:'002',
                    imgUrl  :'http://m.npx110.org/images/banner01.jpg'
            }
              ]
            }
        },
        components: {
            swiper,
            swiperSlide
        },
        created(){
           // console.log(11)
            this.clickaxios ()
        },
        methods:{
           clickaxios (){
               this.$axios.get('http://112.74.189.163/banner').then((res)=>{
                   console.log(res)
               })
           }
        }


    }
</script>

<style scoped lang="stylus">
    .wraper >>> .swiper-pagination-bullet-active
       background #fff
    .wraper
        width 100%
        /*height 0*/
        /*overflow hidden*/
        /*padding-bottom:50%*/

     .swiper-img
            width:100%
</style>