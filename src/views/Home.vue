<template>
  <div class="home">
    <Header/>
  <div class="container">
    <b-card :title="username.name" :sub-title="username.email">
            <b-avatar variant="primary" text="BV"></b-avatar>

    <b-card-text>
      Some quick example text to build on the <em>card title</em> and make up the bulk of the card's
      content.
    
    
    </b-card-text>

    <b-card-text>A second paragraph of text in the card.</b-card-text>

    <a href="#" class="card-link">Card link</a>
    <b-link href="#" class="card-link">Another link</b-link>
  </b-card>
  </div>
</div>
</template>
<style lang="sass">
  .container
    margin-top: 10px
    width: 20%
</style>
<script>
import Header from "../components/Header";

export default {
  name: "home",
  components: {
    Header
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