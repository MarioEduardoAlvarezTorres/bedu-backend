const express = require('express');
const app = express();

const PORT = 3000;
app.use(express.json());
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

app.post('/gods/:name',(req,res)=>{
    const {name} = req.params;
    const data = req.body;
    gods[name] = data;
    res.status(201).json({
        msg: data
    });
});

app.put('/gods/:name',(req,res)=>{
    const {name} = req.params;
    if(!(name in gods)){
        res.status(404).json({
            msg: 'Got not found'
        })
        return;
    }
    const data = req.body;
    gods[name] = data;
    res.json({
        msg: gods[name]
    })

});

app.delete('/gods/:name',(req,res)=>{
    const {name} = req.params;
    if(!(name in gods)){
        res.status(404).json({
            msg: 'Got not found'
        })
        return;
    }
    delete gods[name];
    res.json({
        deleted:true
    })
});

app.listen(PORT,() =>{
    console.log(`App listening on port ${PORT}`)
});