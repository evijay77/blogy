<template>
  <div class="post">
  <Header/>
  <div class="container">
     <b-form-input
          id="input-1"
          v-model="title"
          type="text"
          required
          placeholder="Enter Title">
          </b-form-input>
    <b-form-textarea
      id="content"
      v-model="content"
      placeholder="Enter something..."
      rows="3"
      max-rows="6">
      </b-form-textarea>
      <b-button v-on:click="post()">Post</b-button>

  </div>

  </div>
</template>
<script>
import Header from "../components/Header";
import axios from "axios";
  export default {
    name: "post",
    data() {
      return {
          title: '',
          content: ''
      }
    },
    components: {
    Header
  },
  methods: {
    post(){
      if(this.title){
         const token = localStorage.getItem('token');
           console.log(token);
         axios({
          method: "post",
          url: `${process.env.VUE_APP_SEVER_URL}/api/post`,
          data: {
            title: this.title,
            mdContent: this.content,
            userId: "123"
          },
          headers: {
            authorization: `${token}`
          }
        })
          .then(response => {
            if (response.status === 200) {
            
              console.log("Login success");
              console.log(response.data);
              this.$router.push('/');
            }
            
          })
          .catch(error => {
            console.log(error);
          });
    }
  }
  }
  }
</script>
<style lang="sass">
  .container
    margin-top: 10px
    width: 50%
</style>