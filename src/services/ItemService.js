const db = require('../db/db'); // do i need
const {Item} = require('../db/models');

class ItemService{
    constructor(){
    }

    static getMany=async()=>{
        return await Item.find();
    }

    getOne=async(id)=>{}
}


module.exports = ItemService;