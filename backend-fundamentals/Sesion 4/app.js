const express = require('express');
const app = express();

const PORT = 3000;

const gods = {
    Zeus:{live:'Olympus',symbol: 'Thunderbolt'},
    Hades:{live:'Underworld',symbol:'Cornucopia'}
}

app.get('/',(req,res) =>{
    res.json({
        msg: 'Get de Proyecto'
    })
});

app.get('/gods',(req,res)=>{
    res.json(gods);
});

app.get('/gods/:name',(req,res)=>{
    //const name = req.params.name;
    const {name} = req.params;
    res.json(gods[name]);
});

app.listen(PORT,() =>{
    console.log(`App listening on port ${PORT}`)
});