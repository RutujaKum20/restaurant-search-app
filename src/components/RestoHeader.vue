<template>
    <div id="nav">
        <router-link to='/'>Home</router-link>
        <router-link to='/AddResto'>Add restourant</router-link>
        <a @click="logout()" href="#">Logout</a>
    </div>
</template>
<script>


export default {
    name:'RestoHeader',
    methods:{
        logout(){
            // console.warn("logout");
            localStorage.clear();
            this.$router.push({name: 'RestoLogin' })
        }
    }
    }
</script>

<style>
#nav{
    background-color: gray;
    display: flex;
    justify-content: flex-start;
    overflow: hidden;
}
 #nav a {
   color: #f2f2f2;;
   padding: 14px 16px;
   text-align: center;
   font-size: 17px;
   text-decoration: none;
   margin-right: 5px;
}
#nav a:hover{
    background:#ddd;
    color:#333;
}
</style>

