<template>
  <restoHeader />
  <h1>Hello {{ name }}, Welcome to Restourant home page</h1>
  <table border="1">
    <tr>
      <td>id</td>
      <td>name</td>
      <td>contact</td>
      <td>address</td>
      <td>actions</td>
    </tr>
    <tr v-for="item in resto" :key="item.id">
      <td>{{ item.id }}</td>
      <td>{{ item.name }}</td>
      <td>{{ item.contact }}</td>
      <td>{{ item.address }}</td>

      <td>
        <router-link :to="'/updateResto/' + item.id">Update</router-link>
        <button @click="deleteResto(item.id)">Delete</button>
      </td>
    </tr>
  </table>
</template>
<script>
import RestoHeader from "./RestoHeader.vue";
import axios from "axios";
export default {
  name: "RestoHome",
  data() {
    return {
      name: "",
      resto: [],
    };
  },
  components: {
    RestoHeader,
  },
  methods: {
    async deleteResto(id) {
      let result = await axios.delete(
        "https://resto-db.onrender.com/restourants/" + id
      );
      console.log(result);
      if (result.status == 200) {
        this.loadData();
      }
    },
    async loadData() {
      let user = localStorage.getItem("user-Details");
      this.name = JSON.parse(user).name;
      if (!user) {
        this.$router.push({ name: "SignUp" });
      }
      let result = await axios.get("https://resto-db.onrender.com/restourants");
      console.warn(result);
      this.resto = result.data;
    },
  },
  async mounted() {
    this.loadData();
  },
};
</script>
<style>
td {
  width: 160px;
  height: 40px;
}
</style>
