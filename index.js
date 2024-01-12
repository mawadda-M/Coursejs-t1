const express = require('express')
const router = require('./router/router');
const cors = require('cors');
const app = express()
const port = 3000

app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(router)






app.listen(port, () => console.log(`Example app listening on port ${port}!`))