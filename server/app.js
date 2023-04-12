const express = require('express')
const cors = require('cors')

const app = express()
const port = 3000

app.use(cors())


app.get('/api', (req, res) => {
  res.json({msg: 'asdasd!'})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})