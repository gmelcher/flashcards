<template>
  <v-layout row wrap>
    <v-flex xs6 offset-xs3>
      <v-text-field
        color="green darken-2"
        label="Search by Term or Answer"
        v-model="search"
      ></v-text-field>
      <panel title='List'>
          <v-btn
            :to="{ name: 'Create'}"
            slot="action"
            class="orange"
            dark
            medium
            fab
            absolute
            right
            middle>
            <v-icon>
              add
            </v-icon>
          </v-btn>
        <v-list two-line>
          <template v-for="(card, index) in cards">
              <v-list-tile
                :key="card.id"
                ripple
                :to="`update/${ card.id }`">
                <v-list-tile-content>
                  <v-list-tile-title>{{ card.term }}</v-list-tile-title>
                  <v-list-tile-sub-title>{{ card.answer }}</v-list-tile-sub-title>
                  <v-list-tile-sub-title>{{ card.moreInfoURL }}</v-list-tile-sub-title>
                </v-list-tile-content>
              </v-list-tile>
            <v-divider
              v-if="index + 1 < cards.length"
              :key="`divider-${card.id}`"
            ></v-divider>
          </template>
        </v-list>
      </panel>
    </v-flex>
  </v-layout>
</template>

<script>
import Panel from '@/components/Panel'
import CardsService from '@/services/CardsService'
import _ from 'lodash'
export default {
  components: {
    Panel
  },
  data () {
    return {
      cards: null,
      search: ''
    }
  },
  watch: {
    'search':
      _.debounce(async function (value) {
        this.cards = (await CardsService.getAllCards(value)).data
      }, 300)
  },
  async mounted () {
    if (!this.$store.state.isUserLoggedIn) {
      this.$router.push({
        name: 'Login'
      })
    }
    this.cards = (await CardsService.getAllCards()).data
  }
}
</script>

<style scoped>
</style>
