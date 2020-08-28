const express = require('express')

const peopleRequest = require('./jsons/people.json')
const app = express()

app.get('/api', (req, res) => {
    res.send(peopleRequest)
})

app.listen(4000)