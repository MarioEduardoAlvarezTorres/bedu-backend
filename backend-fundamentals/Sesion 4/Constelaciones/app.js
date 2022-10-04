const express = require('express');
const app = express();

const PORT = 3000;

const constelaciones = {
    Andromeda:{
        abreviatura:'And',
        superficie: 722.3,
        num_estrellas:152,
        estr_mas_brillante:'Alpheratz'
    },
    Aquila:{
        abreviatura:'Aql',
        superficie: 652.5,
        num_estrellas:124,
        estr_mas_brillante:'Altair'
    },
    Altar:{
        abreviatura:'Ara',
        superficie: 237.1,
        num_estrellas: 71,
        estr_mas_brillante:'Beta Arae'
    },
    Auriga:{
        abreviatura:'Aur',
        superficie: 657.4,
        num_estrellas: 152,
        estr_mas_brillante:'Capella '
    },
    Bootes:{
        abreviatura:'Boo',
        superficie: 906.8,
        num_estrellas:144,
        estr_mas_brillante:'Arturo '
    }
}

app.get('/',(req,res) =>{
    res.json({
        msg: 'Get de Proyecto'
    })
});

app.get('/constelaciones',(req,res)=>{
    res.json(constelaciones);
});

app.get('/constelaciones/:name',(req,res)=>{
    //const name = req.params.name;
    const {name} = req.params;
    res.json(constelaciones[name]);
});

app.listen(PORT,() =>{
    console.log(`App listening on port ${PORT}`)
});