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
    <h3 class="text-center" style="color:#17A2B8; margin-bottom: 30px">Welcome Blogers!</h3>
    <div>
     <b-form-group
      right-align vertical-align="center"
        id="input-group-1"
        label="Email Address"
        label-for="input-1">
        <b-form-input
          id="input-1"
          v-model="email"
          type="email"
          required
          placeholder="Email Address"
          @keyup.native.enter="login"
        ></b-form-input>
      </b-form-group>
      <b-form-group id="input-group-2" label="Password" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="password"
          type="password"
          required
          placeholder="Password"
          @keyup.native.enter="login"
        ></b-form-input>
      </b-form-group>
      <b-button style="width: 100%;" type="submit" variant="info" v-on:click="login()">Login</b-button>
  </div>
  </b-card>
    <h6>You already registerd please ? <a href="/register">click</a></h6>
</b-container>
</div>
  </div>
</template>