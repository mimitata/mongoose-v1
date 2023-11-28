const mongoose=require('mongoose')

const clientSchema=mongoose.Schema(
    {
        name:String,
        email:String,
        age:Number

    }
)
const client=mongoose.model('client',clientSchema)
module.exports=client