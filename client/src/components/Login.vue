<template>
  <v-layout row wrap>
    <v-flex xs6 offset-xs3>
      <div class ="white elevation-2">
        <v-toolbar flat dense class="green darken-2" dark>
          <v-toolbar-title>Login</v-toolbar-title>
        </v-toolbar>
          <div class="pl-4 pr-4 pt-2 pb-2">
            <v-text-field
              label="email"
              v-model="email"
            ></v-text-field>
            <br>
            <v-text-field
              label="password"
              v-model="password"
            ></v-text-field>
            <br>
            <v-btn
              class="green darken-2" dark
              v-on:click="login">
              Login
              </v-btn>
            <br>
            <div class="error" v-html="error" />
          </div>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    async login () {
      try {
        await AuthenticationService.login({
          email: this.email,
          password: this.password
        })
      } catch (error) {
        this.error = error.response.data.error
      }
      console.log(this.email, this.login)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.error {
  background-color: #999;
  color: red;
}

</style>
