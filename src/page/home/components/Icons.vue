<template>
    <div id="ions">
        <ul v-for="item of iconsList" :key="item.id">
            <li><img :src="item.imgUrl" alt=""><p>{{item.desc}}</p></li>

        </ul>
    </div>
</template>

<script>
    export default {
        name: "Icons",
        data () {
            return{
               iconsList:[{
                   id:'001',
                   imgUrl:require('@/assets/images/nav01.png'),
                   desc:'滑雪'
               },{
                   id:'002',
                   imgUrl:require('@/assets/images/nav02.png'),
                   desc:'一日游'
               },{
                   id:'003',
                   imgUrl:require('@/assets/images/nav03.png'),
                   desc:'北京必游'
               },{
                   id:'004',
                   imgUrl:require('@/assets/images/nav04.png'),
                   desc:'名胜古迹'
               }

            ]
        }
     }

    }
</script>

<style scoped lang="stylus">
    #ions
        ul li
            float left
            width 25%
            text-align center
         P
            text-align center
            font-size 0.2rem
            margin 0.12rem 0
         img
            width 0.71rem
            height 0.71rem


</style>