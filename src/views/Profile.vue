<template>
  <div class="profile">
  <b-navbar toggleable="lg" type="dark" variant="info">
    <b-navbar-brand href="/"><img style="width: 30px" src="./../assets/logo.png"> Blogy</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">

        <b-nav-item-dropdown right>
          <!-- Using 'button-content' slot -->
          <template v-slot:button-content>
            <em><b-avatar variant="info"></b-avatar></em>
          </template>
          <b-list-group-item class="d-flex align-items-center">
       <!--  <b-avatar variant="info" src="https://placekitten.com/300/300" class="mr-2"></b-avatar> -->
        <span class="mr-auto">Vijay</span>
        <b-badge>9</b-badge>
      </b-list-group-item>
          <b-dropdown-item href="#">Profile</b-dropdown-item>
          <b-dropdown-item href="#">Sign Out</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
  <div class="container">
    <b-avatar src="https://placekitten.com/300/300" size="6rem"></b-avatar><hr>
    <h3 style="color:#17A2B8">Vijay Ethuraj</h3>
  </div>

  </div>
</template>
<style lang="sass">
  .container
    text-align: center;
    margin-top: 10px;
    width: 50%;
</style>