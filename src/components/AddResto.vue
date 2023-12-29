<template>
    <restoHeader />
    <h1>Hello user, Welcome to Add Restourant page</h1>
    <form class="add">
        <input type="text" name="name" placeholder="Enter Name" v-model="resto.name" />
        <input type="text" name="address" placeholder="Enter address" v-model="resto.address" />
        <input type="text" name="contact" placeholder="Enter contact" v-model="resto.contact" />
        <button type="button" @click="addNewResto()">Add new Restourant</button>
    </form>
</template>
<script>
import RestoHeader from './RestoHeader.vue';
import axios from 'axios'

export default{
    name:'AddResto',
    components:{
        RestoHeader
    },
    data(){
        return{
            resto:{
                name: '',
                address: '',
                contact: ''
            }  
        }
    },
    methods:{
        async addNewResto(){
            console.log(this.resto);
            let result = await axios.post("http://localhost:3000/restourants",{
                name:this.resto.name,
                address: this.resto.address,
                contact: this.resto.contact,
            });
            if(result.status==201){
                this.$router.push({name:'RestoHome'})
            }
            console.warn("result",result);
        }
    },
     mounted() {
        let user = localStorage.getItem("user-Details");
        if (!user) {
            this.$router.push({ name: 'SignUp' })
        }
    }
}
</script>