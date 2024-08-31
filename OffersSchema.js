let mongoose= require('mongoose');
let offersSchema=new mongoose.Schema({
 id:Number,
 offer:String,
})
module.exports=mongoose.model("Offers",offersSchema)




