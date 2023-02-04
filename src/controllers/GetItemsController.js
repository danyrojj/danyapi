const ItemService = require('../services/ItemService');

const controller = async (req,res)=>{
    try{
        console.log('upooiohjoihj')
        const items = await ItemService.getMany();
        res.status(200).send(items);
    }catch(e){
        console.log('req invalid');
        res.status(500).send('req invalid');
    }
};
module.exports = controller;