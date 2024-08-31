let mongoose= require('mongoose');
let TreatmentSchema=new mongoose.Schema({
 id:Number,
 TreatmentName:String,
})
module.exports=mongoose.model("Treatment",TreatmentSchema)




