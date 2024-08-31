// {id}


// id,patientname,TreatmentName,BookingDate
let mongoose= require('mongoose');
let AppointmentSchema=new mongoose.Schema({
 id:Number,
doctor:String,
patientname:String,
TreatmentName:String,
BookingDate:String,
status:String,
})
module.exports=mongoose.model("Appointment",AppointmentSchema)



















