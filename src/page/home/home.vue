<template>
    <div class="home">
        <!--<router-link tag="div" to="/list"></router-link>-->
        <!--<p class="" @click="handelclick()">home</p>-->
        <home-header></home-header>
        <home-swiper></home-swiper>

    </div>

</template>

<script>
    import HomeHeader from './components/Header'  //引入组件
    import HomeSwiper from './components/Swiper'
    export default {
        // 组件得名字
        name: "home",

        methods:{
             // handelclick () {
             // this.$router.push('list')
             //    this.$router.push({path:'list'})

            // }
            // handelclick:function() {
            //
            // }
        },
        components:{
            //声明组件
            HomeHeader ,
            HomeSwiper
        }

    }
</script>

<style scoped lang="stylus">

</style>


