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

  export default {
    name: "post",
    components: {
    Header
  }
  }
</script>
<style lang="sass">
  .container
    margin-top: 10px
    width: 50%
</style>