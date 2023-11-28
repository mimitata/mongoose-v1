const express=require('express')
const route=express.Router()
const client=require('../models/clientShema')

route.get('/',
async(req,res)=>{
    try{
        const clientlist= await client.find()
        res.status(200).json({msg: "get all client", clientlist:clientlist})

    }
    catch{
        res.status(500).json({msg:err})
    }
})

route.post('/post',
async(req,res)=>{
    try{
        const clientlist= await client.find(req,body)
        await clientlist.save()

        res.status(200).json({msg: "new contact", newcontact:clientlist})

    }
    catch{
        res.status(500).json({msg:err})
    }
})

module.exports=route  