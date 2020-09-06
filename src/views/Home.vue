<template>
  <div class="home">
    <Header/>
  <div class="container">
    <div v-for="d in data" :key="d.title">
    <b-card class="card" :title="username.name" :sub-title="username.email">
            <b-avatar variant="primary" text="BV"></b-avatar>
    <b-card-text>
      <em>{{d.title}}</em>
    </b-card-text>
     <input type="text" :value="d.userId"/>
    <b-card-text>{{d.mdContent}}</b-card-text>
    <a href="#" class="card-link">Card link</a>
    <b-link href="#" class="card-link">Another link</b-link>
  </b-card>
</div>
  </div>
</div>
</template>
<script>
import Header from "../components/Header";
import axios from "axios";

export default {
  name: "home",
  data(){
    return{
      data: "",
      userid: ""
    }
  },
  components: {
    Header
  },
  mounted() {
      axios
        .get(`${process.env.VUE_APP_SEVER_URL}/api/getPost`)
        .then(response =>{
          this.data = response.data;
        });
      axios.get(`${process.env.VUE_APP_SEVER_URL}/api/getPost`)
        .then(response =>{
          console.log(response.data);
        })
  },
  computed: {
    username() {
      const users = this.$store.getters["getUser"];
      console.log(users);
      return users;
    },
    avatar() {
      const users = this.$store.getters["getUser"];
      return users.avatar;
    }
    }
};
</script>