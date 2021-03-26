const express = require('express');
const { dirname } = require('path');
const app = express()
const port = 3000
const path = require('path');
console.log('anda')
app.use(express.static('public'));


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './views/home.html'));
});

app.listen(port, () => {
    console.log('esta andando en el puerto '+ port);
});

app.get("/login", (req, res) => {
    res.sendFile(path.join(__dirname, "./views/login.html" ))
} )
app.get("/register", (req, res) => {
    res.sendFile(path.join(__dirname, "./views/register.html" ))
} )