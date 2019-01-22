<template>
    <div class="home">
        <!--<router-link tag="div" to="/list"></router-link>-->
        <!--<p class="" @click="handelclick()">home</p>-->
        <!--父组件王子组件传值通过属性得形式 -->
        <home-header></home-header>
        <home-swiper></home-swiper>
        <home-icons :list="iconList"></home-icons>
        <home-recommend></home-recommend>
    </div>

</template>

<script>
    import HomeHeader from './components/Header'  //引入组件
    import HomeSwiper from './components/Swiper'
    import HomeIcons from './components/Icons'
    import HomeRecommend from './components/Recommend'
    import axios from 'axios'

    export default {
        // 组件得名字
        name: "home",
        data(){
          return{
            //存一个back

            iconList:[]
          }
        },
        methods:{
            // 路由跳转
             // handelclick () {
             // this.$router.push('list')
             //    this.$router.push({path:'list'})

            // }
            // handelclick:function() {
            //
            // }
            getHomeInfo (){
               axios.get('/api/index.json').then(this.getHomeInfoSucc)
            },
            getHomeInfoSucc(res){
                res = res.data
                if(res.ret && res.data){
                  const data = res.data
                    this.iconList = data.iconList
                }
                console.log(res)
            }

        },
        components:{
            //声明组件
            HomeHeader ,
            HomeSwiper,
            HomeIcons,
            HomeRecommend,

        },
        // 挂载调用函数
        mounted () {
            this.getHomeInfo()
        }

    }
</script>

<style scoped lang="stylus">

</style>


