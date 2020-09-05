<template>
  <b-navbar toggleable="lg" type="dark" variant="info">
    <b-navbar-brand href="/"><img style="width: 30px" src="./../assets/logo.png"> Blogy</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    <b-collapse id="nav-collapse" is-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <div v-if="!isAuthenticated">
          <router-link to="/login"><b-button size="sm" class="my-2 my-sm-0" type="submit">Login</b-button></router-link>
        </div>
          <div v-if="isAuthenticated">
          <b-nav-item-dropdown right>
          <!-- Using 'button-content' slot -->
          <template v-slot:button-content>
            <em><b-avatar variant="info" :src="avatar"></b-avatar></em>
          </template>
          <b-list-group-item class="d-flex align-items-center">
          <span class="mr-auto">{{username}}</span>
          <b-badge>9</b-badge>
        </b-list-group-item>
          <b-dropdown-item href="/profile">Profile</b-dropdown-item>
          <b-dropdown-item v-on:click="logout()">Sign Out</b-dropdown-item>
        </b-nav-item-dropdown>
        </div>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>
<script>
	export default {
    data() {
      return {
        users: ""
      }
    },
		computed: {
			isAuthenticated() {
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