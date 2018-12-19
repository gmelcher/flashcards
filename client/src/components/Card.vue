<template>
  <v-layout>
    <v-flex xs6 offset-xs3>
      <panel title="Card">
        <v-btn
          slot="action"
          class="orange"
          dark
          small
          fab
          absolute
          right
          middle
          v-on:click="seen = !seen">
          <v-icon>
            visibility
          </v-icon>
        </v-btn>
        <div class="pl-4 pr-4 pt-2 pb-2">
          <v-data-table
            :headers="headers"
            :hide-headers="true"
            :items="cards"
            :rows-per-page-items="[1]"
            >
            <template slot="items" slot-scope="props">
              <tr>
                <td xs1 class="text-xs-left">
                  <p class="title pt-3">Term</p>
                </td>
                <td class="text-xs-left">
                  <p class="display-1 pt-3">
                    {{ props.item.term }}
                  </p>
                </td>
              </tr>
              <tr>
                <td class="text-xs-left">
                  <p class="title pt-3">Answer</p>
                </td>
                <td class="text-xs-left">
                  <p
                    v-show="seen"
                    class="display-1 grey--text pt-3">
                    Click button to see answer
                  </p>
                  <p
                    v-show="!seen"
                    class="display-1 pt-3">
                  {{ props.item.answer }}
                  </p>
                </td>
              </tr>
              <tr>
                <td class="text-xs-left">
                  <p class="title pt-3">moreInfoURL</p>
                </td>
                <td class="text-xs-left">
                  <p
                    v-show="seen"
                    class="display-1 pt-3">
                  </p>
                    &nbsp;
                  <p
                    v-show="!seen"
                    class="title pt-3">
                    <a :href="props.item.moreInfoURL" target="_blank">
                    {{ props.item.moreInfoURL }}
                    </a>
                  </p>
                </td>
              </tr>
            </template>
          </v-data-table>
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
      seen: true,
      cards: []
    }
  },
  components: {
    Panel
  },
  async mounted () {
    this.cards = (await CardsService.getAllCards()).data
  }
}
</script>

<style scoped>
</style>
