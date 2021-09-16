const axios = require('axios')

axios.post('http://192.168.29.194:5210/encrypt', {data: 'baba boii'})
    .then(r => {axios.post('http://192.168.29.194:5210/decrypt', {
        data: r.data.encrypted,
        password: r.data.password,
        salt: r.data.salt,
        iv: r.data.iv
})
    .then(r => {console.log(r.data);})
    .catch(err => {console.log(err);})
    })
    .catch(err => {console.log(err);})

    console.log('hey');

`Location
1st random Key
2nd random Key
3rd random Key
My random Key
Their password
Location check
Random IV
Random salt
`