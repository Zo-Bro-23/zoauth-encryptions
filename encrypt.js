const express = require('express')
const app = express()
const crypto  = require('crypto')
const cryptoRandomString = require('crypto-random-string')

let algorithm
let password
let keyLen
let salt
let iv
let encoding

app.use(express.json({limit: '500mb'}))

app.post('/encrypt', (req, resp) => {
    if(!req.body.data){
        resp.status(400).send('No data specified.')
        return
    }
    if(!req.body.algorithm){
        algorithm = 'aes-192-cbc'
    }else {
        algorithm = req.body.algorithm
    }
    if(!req.body.password){
        password = cryptoRandomString({length: Math.floor(Math.random() * 100000), type: 'ascii-printable'})
    }else {
        password = req.body.password
    }
    if(!req.body.keylen){
        keyLen = 24
    }else {
        keyLen = req.body.keylen
    }
    if(!req.body.salt){
        salt = cryptoRandomString({length: Math.floor(Math.random() * 100000), type: 'ascii-printable'})
    }else {
        salt = req.body.salt
    }
    if(!req.body.iv){
        iv = crypto.randomFillSync(new Uint8Array(16))
    }else {
        iv = new Uint8Array(req.body.iv.split('somethingSpecial'))
    }
    if(!req.body.encoding){
        encoding = 'hex'
    }else {
        encoding = req.body.encoding
    }

    const key = crypto.scryptSync(password, salt, keyLen)
    const cipher = crypto.createCipheriv(algorithm, key, iv)
    cipher.setEncoding(encoding)
    let encrypted = ''
        
    cipher.on('data', chunk => {encrypted += chunk})
    cipher.on('end', () => resp.json({encrypted, password, algorithm, iv: iv.join('somethingSpecial'), encoding, keyLen, salt}))

    cipher.write(req.body.data)
    cipher.end()
})

app.listen(5210)