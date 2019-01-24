<template>
    <div>
        <city-header></city-header>
        <city-search></city-search>
        <city-list :cities="cities" :hot="hotCities" :letter="letter"></city-list>
        <city-alphabet :cities="cities" @change="handletterChange"></city-alphabet>
    </div>
</template>

<script>
    import axios from 'axios'
    import CityHeader from './components/Cityheader'
    import CitySearch from './components/search'
    import CityList from './components/List'
    import CityAlphabet from './components/Alphabet'
    export default {
        name: "City",
        components:{
            CityHeader,
            CitySearch,
            CityList,
            CityAlphabet
        },
        data () {
            return {
                cities:{},
                hotCities:[],
                letter:''
            }
        },
        methods:{
            getCityInfo (){
                axios.get('/api/city.json').then(this.handleGetCityInfoSucc)
            },
            handleGetCityInfoSucc(res){
                res = res.data
                if(res.ret && res.data){
                    // console.log(res)
                    const data = res.data
                    this.cities = data.cities
                    this.hotCities = data.hotCities

                }
            },
            handletterChange(letter){
                this.letter = letter
                // console.log(letter)
            }

        },
        mounted (){
            this.getCityInfo()
        },
    }
</script>

<style scoped lang="stylus">

</style>