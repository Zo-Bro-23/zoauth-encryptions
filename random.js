const express = require('express')
const app = express()
const cryptoRandomString = require('crypto-random-string')

app.get('/random', (req, resp) => {
    if(!req.query.length){
        resp.status(400).send('No length specified.')
        return
    }
    if(!req.query.type){
        resp.status(400).send('No type specified.')
        return
    }
    resp.send(cryptoRandomString({length: parseInt(req.query.length), type: req.query.type}))
})

app.listen(5210)