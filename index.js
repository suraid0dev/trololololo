const express = require('express')
const app = express()
const port = 80

app.use(express.static(__dirname + '/public'));
app.get('/', (req, res) => {
  res.sendFile('public/test.html', {root: __dirname })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
