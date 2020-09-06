<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <router-view/>
  </div>
</template>
<script>

export default {
	name: "app",
	
	created() {
		const user = JSON.parse(localStorage.getItem("user"));
		if (user) {
			this.$store.dispatch("login", {
				authToken: user.authToken,
				name: user.name,
				email: user.email,
				avatar: user.avatar
			});
		}
	}
};
</script>
