<template>
  <v-toolbar fixed class="green darken-2" dark>
    <v-toolbar-title class="mr-4">
      <router-link to="/" tag="button">
        Flashcards
      </router-link>
    </v-toolbar-title>
      <v-btn flat dark>
        Browse
      </v-btn>
      <v-spacer></v-spacer>
        <router-link to="login" tag="button">
          <v-btn flat dark>
            Login
          </v-btn>
        </router-link>
        <router-link to="register" tag="button">
          <v-btn flat dark>
            Sign Up
          </v-btn>
        </router-link>
  </v-toolbar>

</template>

<script>
export default {

}
</script>

<style scoped>
</style>
