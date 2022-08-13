//require express
const express = require('express')
//this way you cab create a router
const router = express.Router()

// middleware that is specific to this router
router.use((req, res, next) => {
  console.log('Time: ', Date.now())
  next()
})
// define the home page route
router.get('/', (req, res) => {
  res.send('This is my home page')
})
// define the about page route
router.get('/about', (req, res) => {
  res.send('This is the about page')
})

//exporte the modue
module.exports = router