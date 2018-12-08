<template>
  <v-toolbar fixed class="green darken-2" dark>
    <v-toolbar-title class="mr-4">
      <router-link :to="{ name:'Root' }" tag="button">
        Flashcards
      </router-link>
    </v-toolbar-title>
      <router-link :to="{ name: 'List'}" tag="span">
          <v-btn
            v-if="$store.state.isUserLoggedIn"
            flat
            dark>
            List
          </v-btn>
        </router-link>
      <v-spacer></v-spacer>
        <router-link :to="{ name: 'Login' }" tag="span">
          <v-btn
            v-if="!$store.state.isUserLoggedIn"
            flat
            dark>
            Login
          </v-btn>
        </router-link>
        <router-link :to="{ name: 'Register' }" tag="span">
          <v-btn
            v-if="!$store.state.isUserLoggedIn"
            flat
            dark>
            Sign Up
          </v-btn>
        </router-link>
        <router-link :to="{ name:'Root' }" tag="span">
          <v-btn
            v-if="$store.state.isUserLoggedIn"
            flat
            dark
            @click="logout">
            Log Out
          </v-btn>
        </router-link>
  </v-toolbar>

</template>

<script>
export default {
  methods: {
    logout () {
      this.$store.dispatch('setToken', null)
      this.$store.dispatch('setUser', null)
    }
  }

}
</script>

<style scoped>
</style>
