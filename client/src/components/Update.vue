<template>
  <v-layout>
    <v-flex xs6 offset-xs3>
      <panel title="Update">
        <div class="pl-4 pr-4 pt-2 pb-2">
          <v-text-field
            color="green darken-2"
            label="Term"
            v-model="card.term"
          ></v-text-field>
          <br>
          <v-textarea
            color="green darken-2"
            label="Answer"
            v-model="card.answer"
          ></v-textarea>
          <br>
          <v-text-field
            color="green darken-2"
            label="More Info"
            v-model="card.moreInfoURL"
          ></v-text-field>
          <br>
          <v-btn
            class="green darken-2" dark
            v-on:click="update">
            Update
          </v-btn>
          <v-btn
            class="green darken-2" dark
            v-on:click="deleteCard">
            Delete
          </v-btn>
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
  components: {
    Panel
  },
  data () {
    return {
      card: {
        term: null,
        answer: null,
        moreInfoUrl: null
      }
    }
  },
  methods: {
    async update () {
      try {
        await CardsService.put(this.card)
        this.$router.push({
          name: 'List'
        })
      } catch (err) {
        console.log(err)
      }
    },
    async deleteCard () {
      try {
        await CardsService.deleteCard(this.card)
        this.$router.push({
          name: 'List'
        })
      } catch (err) {
        console.log(err)
      }
    }
  },
  async mounted () {
    try {
      if (!this.$store.state.isUserLoggedIn) {
        this.$router.push({
          name: 'Login'
        })
      }
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
