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

app.post('/decrypt', (req, resp) => {
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
        resp.status(400).send('No password specified.')
        return
    }
    password = req.body.password
    if(!req.body.keylen){
        keyLen = 24
    }else {
        keyLen = req.body.keylen
    }
    if(!req.body.salt){    
        resp.status(400).send('No salt specified.')
        return
    }
    salt = req.body.salt
    if(!req.body.iv){
        resp.status(400).send('No iv specified.')
        return
    }
    iv = new Uint8Array(req.body.iv.split('somethingSpecial'))
    if(!req.body.encoding){
        encoding = 'hex'
    }else {
        encoding = req.body.encoding
    }

    const key = crypto.scryptSync(password, salt, keyLen)
    const decipher = crypto.createDecipheriv(algorithm, key, iv)
    let decrypted = ''
        
    decipher.on('readable', () => {
        while (null !== (chunk = decipher.read())) {
        decrypted += chunk.toString('utf8')
      }
    })
    decipher.on('end', () => resp.send(decrypted))

    decipher.write(req.body.data, encoding)
    decipher.end()
})

app.listen(5210)