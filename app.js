
const express = require('express')
const path = require('path')

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
app.use(express.static('public'))
app.use('/api/menu', require('./api-menu-routes.js'))
app.use('/api/events', require('./api-events-routes.js'))

app.listen(port, () => console.log(`Server running: http://localhost:${port}`))