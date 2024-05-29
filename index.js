const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('<h1>I hope you have a good day today!</h1>')
})

const PORT = 8080

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})