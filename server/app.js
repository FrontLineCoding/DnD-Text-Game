const express = require('express');
const fetch = require('node-fetch');



const app = express();
app.use(express.json());
app.use('/', express.static('html-pages'));

app.get('/', async (req, res) => {

    //non async
    //  fetch('https://www.dnd5eapi.co/api/classes')
    // .then(res => res.json())
    // .then(json => res.json(json));


    //async attempt --works
    const classesResponse = await fetch('https://www.dnd5eapi.co/api/classes');
    const classesData = await classesResponse.json();
    console.log(classesData);
    // res.json(classesData);
    res.sendFile(__dirname + '/html-pages/character-creation/hero-choose.html');
});


app.get('/combat', (req, res) => {
    res.sendFile(__dirname + '/html-pages/combat/combat.html');
});


const port = 5000;
app.listen(port, ()=>{console.log(`Listening on port: ${port}`)});
