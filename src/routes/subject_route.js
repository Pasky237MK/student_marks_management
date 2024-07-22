const express=require('express');
const route=express.Router();

route.get('/',(req,res)=>{
    res.status(200).send('getting all subject');
})

route.post('/',(req,res)=>{
    let{name}=req.body;
    res.status(201).send({'id':1,'name':name});
})

route.put('/',(req,res)=>{
    let id=req.query.id;
    res.status(201).send('the update is: '+ id);
});

route.delete('/:id',(req,res)=>{
    let id=req.params.id;
    res.status(200).send('the deleted id is:'+ id);
});
module.exports=route;