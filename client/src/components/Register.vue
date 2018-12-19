<template>
  <v-layout row wrap>
    <v-flex xs6 offset-xs3>
      <panel title="Register">
        <div class="pl-4 pr-4 pt-2 pb-2">
          <form
            name="register-form"
            autocomplete="off">
            <v-text-field
              label="email"
              v-model="email"
            ></v-text-field>
            <br>
            <v-text-field
              label="password"
              type="password"
              v-model="password"
              autocomplete="new-password"
            ></v-text-field>
            <br>
            <v-btn
              class="green darken-2"
              dark
              v-on:click="register">
              Register
            </v-btn>
          </form>
          <br>
          <div
            class="orange white--text"
            v-html="error" />
        </div>
      </panel>
    </v-flex>
  </v-layout>
</template>

<script>
import Panel from '@/components/Panel'
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
    async register () {
      try {
        const response = await AuthenticationService.register({
          email: this.email,
          password: this.password
        })
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
        this.$router.push({
          name: 'Root'
        })
      } catch (error) {
        this.error = error.response.data.error
      }
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
  color: red;
}

</style>
