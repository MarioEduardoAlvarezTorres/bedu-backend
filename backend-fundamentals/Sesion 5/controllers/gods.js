const God = require('../models/gods');

async function createGod(req,res){
    const body = req.body;
    const god = await God.create(body);
    res.status(201).json(god);
}

async function getGod(req,res){
    const {id} = req.params;
    const god = await God.findByPk(id);
    res.status(200).json(god);
}

async function getGods(req,res){
    const gods = await God.findAll();
    res.status(200).json(gods);
}

async function updateGod(req,res){
    const {id} = req.params;
    const god = req.body;
    const update = await God.update(god,{where:{id}});
    const god_update = await God.findByPk(update[0]);
    res.status(200).json(god_update);
}

async function deleteGod(req,res){
    const {id} = req.params;
    const deleted = God.destroy({
        where:{id}
    });
    res.status(200).json(deleted)
}