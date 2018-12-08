<template>
  <v-layout>
    <v-flex xs6 offset-xs3>
      <panel title="Create">
        <div class="pl-4 pr-4 pt-2 pb-2">
          <form
            name="create-form"
            autocomplete="off">
            <v-text-field
              label="Term"
              :rules="[rules.required]"
              v-model="card.term"
            ></v-text-field>
            <br>
            <v-textarea
              label="Answer"
              :rules="[rules.required]"
              v-model="card.answer"
            ></v-textarea>
            <br>
            <v-text-field
              label="More Info"
              :rules="[rules.required]"
              v-model="card.moreInfoURL"
            ></v-text-field>
            <br>
            <v-btn
              class="green darken-2" dark
              v-on:click="create">
              Create
            </v-btn>
          </form>
          <div class="error" v-if="error">
            {{error}}
          </div>
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
        moreInfoURL: null
      },
      error: null,
      rules: {
        required: value => !!value || 'Required.'
      }
    }
  },
  methods: {
    async create () {
      this.errror = null
      const areAllFieldsFilledIn = Object
        .keys(this.card)
        .every(key => !!this.card[key])
      if (!areAllFieldsFilledIn) {
        this.error = 'Please fill in the required fields.'
        return
      }
      try {
        await CardsService.post(this.card)
        this.$router.push({
          name: 'List'
        })
      } catch (err) {
        console.log(err)
      }
    }
  }
}

</script>

<style scoped>
</style>
