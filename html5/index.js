const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))
app.use(
  express.urlencoded({
    extended: true,
  })
)

app.get('/hello', (req, res) => {
  const { user_name } = req.query
  res.send(`Hello ${user_name}`)
})

app.post('/hello', (req, res) => {
  const { user_name } = req.body
  res.send(`Hello ${user_name}`)
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})
