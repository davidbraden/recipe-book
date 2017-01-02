var express = require('express')
var app = express()

var port = process.env.PORT || 3000

app.use(express.static('src'))

app.listen(port, function () {
  console.log('Example app listening on port 3000!')
})