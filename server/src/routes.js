const AuthenticationController = require('./controllers/AuthenticationController')
const CardsController = require('./controllers/CardsController')
const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy')

module.exports = (app) => {
  app.post('/register',
    AuthenticationControllerPolicy.register,
    AuthenticationController.register)
  app.post('/login',
    // AuthenticationControllerPolicy.register,
    AuthenticationController.login)
  app.get('/cards',
    CardsController.getAllCards)
  app.get('/cards/:id',
    CardsController.getCard)
  app.post('/cards',
    CardsController.post)
  app.put('/cards/:id',
    CardsController.put)
}
