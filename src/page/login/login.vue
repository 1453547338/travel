<template>
    <div class="login">
         <input type="text" v-model="name">
         <input type="password" v-model="password">
         <button @click="fun_c">登陆</button>

    </div>
</template>

<script>
    export default {
        name: "login",
        data () {
            return {
                name: '',
                password:''

            }
        },
        methods:{

            login (Less){

                this.axios.post('http://112.74.189.163/login/cellphone?'+'phone'+'='+Less.name+'&'+'password'+'='+Less.password).then((res)=>{

                    console.log(res)

                   if(res.status == 200){
                       alert('登陆成功')
                   }

                })
            },
            fun_c (){

                if(this.name == '' || this.password == '' ){

                    alert('请输入密码或账号')

                    return false;
                }

                var prames = {}

                prames = {

                    name: this.name,
                    password: this.password

                }

                this.login(prames)

            }
        },


    }
</script>

<style scoped lang="stylus">
    .login
        text-align center
        height 6rem
        background: url(http://p1.music.126.net/fDH7dxtwDwHy7i7IzyeLzQ==/109951163312792350.png) 0 0/cover no-repeat;
        input
            width: 80%
            height 0.46rem
            display block
            border 1px solid mediumvioletred
            margin 0.05rem auto


</style>