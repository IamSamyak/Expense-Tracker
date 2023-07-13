const model = require('../models/model');

async function create_Categories(req,res){
    const Create = new model.Categories({
        type:'Savings',
        color:'#1F3B5C'
    })
    let result = await Create.save();
    res.send(result);
}

async function get_Categories(req,res){
    let data = await model.Categories.find({});
    let filter = await data.map(v => Object.assign({},{type:v.type,color:v.color}))
    return res.json(filter);
}

async function create_Transaction(req,res){
    if(!req.body) return res.status(400).json('Data not provided');
    let {name,type,amount} = req.body;

    const Create = await new model.Transaction({
        name:name,
        type:type,
        amount:amount,
        data: new Date()
    })

    let result = await Create.save();
    if(result){
        return res.json(Create);
    }else{
        return res.status(400).json('Error while creating transaction');
    }
}

async function get_Transaction(req,res){
    let data = await model.Transaction.find({});
    return res.json(data);
}

async function delete_Transaction(req,res){
    if(!req.body) return res.status(400).json({message:"Request body not found"})
    let result =  await model.Transaction.deleteOne(req.body);
    if(result) return res.json('Record Deleted...!');
    return res.json('Error while deleting the record');
}

async function get_Labels(req,res){
    let result = await model.Transaction.aggregate([
        {
            $lookup:{
                from:'categories',
                localField:"type",
                foreignField:'type',
                as:'categories_info'
            }    
        },
        {$unwind:"$categories_info"}
    ])
    if(result){
        let data = result.map(v=>Object.assign({},{_id:v._id,name:v.name,type:v.type,amount:v.amount,color:v.categories_info['color']}));
        return res.json(data);
    }else{
        return res.status(400).json('Looup collection error');
    }
}

module.exports = {
    create_Categories,
    get_Categories,
    create_Transaction,
    get_Transaction,
    delete_Transaction,
    get_Labels
}