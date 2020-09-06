<template>


  <div>
  <b-navbar toggleable="lg" type="dark" variant="info">
    <b-navbar-brand href="#">NavBar</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item href="#">Link</b-nav-item>
        <b-nav-item href="#" disabled><b-nav-form>
          <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
          <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
        </b-nav-form></b-nav-item>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <div v-if="!isAuthenticated">
          <router-link to="/login"><b-button size="sm" class="my-2 my-sm-0" type="submit">Login</b-button></router-link>
          <router-link to="/register"><b-button size="sm" class="my-2 my-sm-0" type="submit">Register</b-button></router-link>
        </div>
        <div v-if="isAuthenticated">
        <b-nav-item-dropdown right>
          <!-- Using 'button-content' slot -->
          <template v-slot:button-content>
            <em><b-avatar class="avatar" variant="info" :src="avatar"></b-avatar></em>
          </template>
          <b-dropdown-item href="#">Profile</b-dropdown-item>
          <b-dropdown-item v-on:click="logout()">Sign Out</b-dropdown-item>
        </b-nav-item-dropdown>
      </div>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>

</template>
<style lang="sass">
  .avatar
    margin-bottom: -10px
    margin-top: -10px
</style>
<script>
	export default {
    data() {
      return {
        users: ""
      }
    },
		computed: {
			isAuthenticated() {
        localStorage.getItem("user");
			const token = this.$store.getters["getAuthToken"];
			console.log(token);
			return !!token;
		},
    username() {
      const users = this.$store.getters["getUser"];
      console.log(users);
      return users.name;
    },
    avatar() {
      const users = this.$store.getters["getUser"];

      return users.avatar;
    }
		},
		methods: {
			logout() {
			this.$store.dispatch("logout");
			this.$router.push("/");
		}
		}
	}
</script>