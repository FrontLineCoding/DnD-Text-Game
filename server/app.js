const express = require('express');
const fetch = require('node-fetch');


const app = express();

app.get('/classes', (req, res) => {


    res.json(fetch('https://www.dnd5eapi.co/api/classes')
    .then(res => res.json())
    .then(json => console.log(json)));
});



const port = 5000;
app.listen(port, ()=>{console.log(`Listening on port: ${port}`)});
