const express = require('express')
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
