<template>
  <v-layout>
    <v-flex xs6 offset-xs3>
      <panel title="Card">
        <div class="pl-4 pr-4 pt-2 pb-2">
          <form
            name="create-form"
            autocomplete="off">
            <v-text-field
              color="green darken-2"
              readonly
              label="Term"
              v-model="card.term"
            ></v-text-field>
            <br>
            <v-textarea
              color="green darken-2"
              readonly
              label="Answer"
              v-model="card.answer"
            ></v-textarea>
            <br>
            <v-text-field
              color="green darken-2"
              readonly
              label="More Info"
              v-model="card.moreInfoURL"
            ></v-text-field>
            <br>
            <v-btn
              class="green darken-2"
              dark
              v-on:click="null">
              Previous
            </v-btn>
            <v-btn
              class="green darken-2"
              dark
              v-on:click="null">
              Random
            </v-btn>
            <v-btn
              class="green darken-2"
              dark
              v-on:click="null">
              Next
            </v-btn>
          </form>
          <br>
        </div>
      </panel>
    </v-flex>
  </v-layout>
</template>

<script>
import Panel from '@/components/Panel'
import CardsService from '@/services/CardsService'
export default {
  data () {
    return {
      card: {}
    }
  },
  components: {
    Panel
  },
  async mounted () {
    try {
      const id = this.$store.state.route.params.id
      this.card = (await CardsService.getCard(id)).data
    } catch (err) {
      console.log(err)
    }
  }
}
</script>

<style scoped>
</style>
