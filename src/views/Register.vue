<template>  
<div class="register">
    <div>
  <b-navbar toggleable="lg" type="dark" variant="info">
   <b-navbar-brand href="/"><img style="width: 30px" src="./../assets/logo.png"> Blogy</b-navbar-brand>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
  </b-navbar>
  <b-container id="loginPanel">
    <b-card style="max-width: 30rem;" class="mt-3">
      <img style="width: 40px;" src="./../assets/logo.png">
    <h3 class="text-center" style="color:#17A2B8; margin-bottom: 10px">Welcome Blogers!</h3><hr/>
    <div>
       <b-form-group
      right-align vertical-align="center"
        id="input-group-1"
        label="Name"
        label-for="input-1">
        <b-form-input
          v-model="name"
          type="text"
          required
          placeholder="Name"
          @keyup.native.enter="login"
        ></b-form-input>
      </b-form-group>
     <b-form-group
      right-align vertical-align="center"
        id="input-group-1"
        label="Email Address"
        label-for="input-1">
        <b-form-input
          v-model="email"
          type="email"
          required
          placeholder="Email Address"
          @keyup.native.enter="login"
        ></b-form-input>
      </b-form-group>
      <b-form-group id="input-group-2" label="Password" label-for="input-2">
        <b-form-input
          v-model="password"
          type="password"
          required
          placeholder="Password"
          @keyup.native.enter="login"
        ></b-form-input>
      </b-form-group>
       <b-form-group
      right-align vertical-align="center"
        id="input-group-1"
        label="Avatar"
        label-for="input-1">
        <b-form-input
          v-model="avatar"
          type="avatar"
          required
          placeholder="Avatar"
          @keyup.native.enter="login"
        ></b-form-input>
      </b-form-group>
      <b-button style="width: 100%;" type="submit" variant="info" v-on:click="register()">Login</b-button>
  </div>
  </b-card>
    <h6>You already registerd please ? <a href="/login">click</a></h6>
</b-container>
</div>
  </div>
</template>
<script>
import axios from "axios";
  export default{
    data(){
      return{
        name: "",
        email: "",
        password: "",
        avatar: ""
      }
    },
    methods:{
      register(){
        axios
          .post(`${process.env.VUE_APP_SEVER_URL}/api/signup`, {
            name: this.name,
            email: this.email,
            password: this.password,
            avatar: this.avatar
          })
          .then(response => {
            if (response.status === 200) {
            
              console.log("Login success");
              console.log(response.data);
              this.$router.push('/login');
            }
            
          })
          .catch(error => {
            console.log(error);
          });
      }
    }
  }
</script>