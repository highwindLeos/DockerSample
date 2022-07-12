const express = require('express');

const app = express();

app.get('/', (req,res) => {
    res.send('Deream Coding Leos in Docker');
});

app.listen(8090, ()=> console.log('8090 port Server is runnuing!!!'))