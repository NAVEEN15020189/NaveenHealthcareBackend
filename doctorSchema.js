let mongoose= require('mongoose');
let DoctorSchema=new mongoose.Schema({
 id:Number,
 doctor:String,
})
module.exports=mongoose.model("Doctor",DoctorSchema)




