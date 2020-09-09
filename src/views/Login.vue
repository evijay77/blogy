<template>
    <div class="login">
        <div>
            <b-navbar toggleable="lg" type="dark" variant="info">
                <b-navbar-brand href="/"><img style="width: 30px;" src="./../assets/logo.png" /> Blogy</b-navbar-brand>
                <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
            </b-navbar>
            <b-container id="loginPanel">
                <b-card style="max-width: 30rem;" class="mt-3">
                    <img style="width: 40px;" src="./../assets/logo.png" />
                    <h3 class="text-center" style="color: #17a2b8; margin-bottom: 10px;">Welcome Blogers!</h3>
                    <hr />
                    <div>
                        <b-form-group right-align vertical-align="center" id="input-group-1" label="Email Address" label-for="input-1">
                            <b-form-input id="input-1" v-model="email" type="email" required placeholder="Email Address" @keyup.native.enter="login"></b-form-input>
                        </b-form-group>

                        <b-form-group id="input-group-2" label="Password" label-for="input-2">
                            <b-form-input id="input-2" v-model="password" type="password" required placeholder="Password" @keyup.native.enter="login"></b-form-input>
                        </b-form-group>
                        <b-button style="width: 100%;" type="submit" variant="info" v-on:click="login()">Login</b-button>
                    </div>
                </b-card>
                <h6>You are not yet register? <a href="/register">click</a></h6>
            </b-container>
        </div>
    </div>
</template>

<script>
  import axios from "axios";
  export default {
    data() {
      return {
          email: '',
          password: '',
          error: null,
          success: false,
      }
    },

    methods: {
      login(){
      axios
          .post(`${process.env.VUE_APP_SEVER_URL}/api/login`, {
            email: this.email,
            password: this.password
          })
          .then(response => {
            if (response.status === 200) {
            
              console.log("Login success");
              console.log(response.data);
                this.$store.dispatch("login", {
                authToken: response.data.token,
                name : response.data.users.name,
                email : response.data.users.email,
                avatar : response.data.users.avatar
              });
               
                const some = this.$store.getters["getAuthToken"];
                console.log(JSON.stringify(some));
              this.$router.push('/');
            }
            
          })
          .catch(error => {
            console.log(error);
          });
      }
    }
  }
</script>