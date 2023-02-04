const {Item} = require('../db/models')
const controller = async (req,res)=>{

    const payload = req.body;
    console.log({payload})
    // if(!payload)res.status(500).send('no body')

    if(Item.validate(payload)){
        // Item.insert(payload)
        const newItem =  Item(payload);
        newItem.save((error) => {
            if (error) {
              console.log(error);
              res.status(500).send(error);
            } else {
                console.log('Item saved successfully!');
                res.status(200).send('item saved'); 
            }
        })
    }else{
        res.status(500).send('invalid body')
    }
}


module.exports = controller