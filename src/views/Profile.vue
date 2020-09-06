<template>
  <div class="profile">
  <Header/>
  <div class="container">
    <b-avatar src="https://placekitten.com/300/300" size="6rem"></b-avatar><hr>
    <h3 style="color:#17A2B8">{{username.name}}</h3>
  </div>

  </div>
</template>
<style lang="sass">
  .container
    text-align: center;
    margin-top: 10px;
    width: 50%;
</style>
<script>
import Header from "../components/Header";
export default{
  components: {
    Header
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      const userId = vm.$store.getters["getAuthToken"];

      if (!userId) {
        vm.$router.push({
          path: "/login",
          query: {
            redirect: "/profile"
          }
        });
      }
    });
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
 }
</script>