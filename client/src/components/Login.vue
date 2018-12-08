<template>
  <v-layout row wrap>
    <v-flex xs6 offset-xs3>
      <panel title="Login">
        <div class="pl-4 pr-4 pt-2 pb-2">
          <form
            name="login-form">
            <v-text-field
              color="green darken-2"
              label="email"
              v-model="email"
              type="text"
            ></v-text-field>
            <br>
            <v-text-field
              color="green darken-2"
              label="password"
              type="password"
              v-model="password"
            ></v-text-field>
            <br>
            <router-link to="list">
              <v-btn
                class="green darken-2" dark
                v-on:click="login">
                Login
              </v-btn>
            </router-link>
          </form>
          <br>
          <div class="error" v-html="error" />
        </div>
      </panel>
    </v-flex>
  </v-layout>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
import Panel from '@/components/Panel'
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
        const response = await AuthenticationService.login({
          email: this.email,
          password: this.password
        })
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
      } catch (error) {
        this.error = error.response.data.error
      }
      console.log(this.email, this.login)
    }
  },
  components: {
    Panel
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
