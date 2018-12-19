import Api from '@/services/Api'

export default {
  getAllCards (search) {
    return Api().get('cards', {
      params: {
        search: search
      }
    })
  },
  getCard (id) {
    return Api().get(`cards/${id}`)
  },
  post (card) {
    return Api().post('cards', card)
  },
  put (card) {
    return Api().put(`cards/${card.id}`, card)
  },
  deleteCard (card) {
    return Api().delete(`cards/${card.id}`, card)
  }
}
