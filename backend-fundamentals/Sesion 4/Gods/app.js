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
    const {live} = req.query;
    if( live ){
        let filtered_gods = Object.entries(gods).filter(god => god[1].live === live);
        filtered_gods = Object.fromEntries(filtered_gods);
        res.json(filtered_gods) 
    }else{
        res.json(gods);
    }
});

app.get('/gods/:name',(req,res)=>{
    //const name = req.params.name;
    const {name} = req.params;
    if( name in gods ){
        res.json(gods[name]);
    }else{
        res.status(404).json({
            msg: 'No se encontro Dios'
        })
    }
});

app.listen(PORT,() =>{
    console.log(`App listening on port ${PORT}`)
});