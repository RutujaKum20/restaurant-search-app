<template>
  <restoHeader />
  <h1>Hello user, Welcome to Update Restourant page</h1>
  <form class="add">
    <input
      type="text"
      name="name"
      placeholder="Enter Name"
      v-model="resto.name"
    />
    <input
      type="text"
      name="address"
      placeholder="Enter address"
      v-model="resto.address"
    />
    <input
      type="text"
      name="contact"
      placeholder="Enter contact"
      v-model="resto.contact"
    />
    <button type="button" @click="updateResto()">Update Restourant</button>
  </form>
</template>
<script>
import RestoHeader from "./RestoHeader.vue";
import axios from "axios";
export default {
  name: "UpdateResto",
  components: {
    RestoHeader,
  },
  data() {
    return {
      resto: {
        name: "",
        address: "",
        contact: "",
      },
    };
  },
  methods: {
    async updateResto() {
      console.warn(this.resto);
      let result = await axios.put(
        "https://resto-db.onrender.com/restourants/" + this.$route.params.id,
        {
          name: this.resto.name,
          address: this.resto.address,
          contact: this.resto.contact,
        }
      );
      if (result.status == 200) {
        this.$router.push({ name: "RestoHome" });
      }
    },
  },

  async mounted() {
    let user = localStorage.getItem("user-Details");
    if (!user) {
      this.$router.push({ name: "SignUp" });
    }
    let result = await axios.get(
      "https://resto-db.onrender.com/restourants/" + this.$route.params.id
    );
    // console.warn(this.$route.params.id)
    console.warn(result.data);
    this.resto = result.data;
  },
};
</script>
