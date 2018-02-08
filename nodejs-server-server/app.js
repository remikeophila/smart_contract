const express = require('express')
const app = express()
var bodyParser = require('body-parser')

app.post('/create', function (req, res) {
  res.send('Hello World!')
})

app.listen(8080, function () {
  console.log('Listening on port 8080!')
})