<template>
  <img class="logo" alt="Restourant logo" src="../assets/resto.png" />
  <h1>Sign Up</h1>
  <div class="register">
    <input type="text" placeholder="Enter Name" v-model="name" />
    <input type="email" placeholder="Enter Email" v-model="email" />
    <input type="password" placeholder="Enter Password" v-model="password" />
    <button @click="signUp()">Sign Up</button>
  </div>
  <p>
    <RouterLink to="/restologin">RestoLogin</RouterLink>
  </p>
</template>

<script>
import axios from "axios";

export default {
  name: "SignUp",
  data() {
    return {
      name: "",
      email: "",
      password: "",
    };
  },
  methods: {
    async signUp() {
      let result = await axios.post("https://resto-db.onrender.com/user", {
        name: this.name,
        email: this.email,
        password: this.password,
      });
      console.log(result);
      if (result.status == 201) {
        alert("sign-up done");
        localStorage.setItem("user-Details", JSON.stringify(result.data));
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

<style></style>
