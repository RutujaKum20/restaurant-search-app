<template>
  <img class="logo" alt="Restourant logo" src="../assets/resto.png" />
  <h1>Resto Login Page</h1>
  <div class="RestoLogin">
    <input type="email" placeholder="Enter Email" v-model="email" />
    <input type="password" placeholder="Enter Password" v-model="password" />
    <button @click="restologin()">restoLogin</button>
  </div>
  <p>
    <RouterLink to="/signup">signUp</RouterLink>
  </p>
</template>

<script>
import axios from "axios";

export default {
  name: "RestoLogin",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    async restologin() {
      let result = await axios.get(
        `https://resto-db.onrender.com/user?email=${this.email}&password=${this.password}`
      );
      console.warn(result);
      if (result.status == 200 && result.data.length > 0) {
        localStorage.setItem("user-Details", JSON.stringify(result.data[0]));
        this.$router.push({ name: "RestoHome" });
      }
    },
  },
  mounted() {
    let user = localStorage.getItem("user-Details");
    if (user) {
      this.$router.push({ name: "RestoHome" });
    }
  },
};
</script>
