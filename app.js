var express=require('express')

var app = express();
var cors=require('cors')
app.use(express.json());
app.use(cors());
require('./db')

let OffersSchema=require('./OffersSchema')

let TreatmentSchema= require('./TreatmentSchema')
let DoctorSchema = require('./doctorSchema');
let AppointmentSchema=require('./AddappointMentSchema')


// Offers



app.post('/offer', async (req, res) => {
    let Offers = new OffersSchema(req.body);
    let result = await Offers.save();
    res.send(result);
  });

  app.get('/offer', async (req, res) => {
    let Offers = await OffersSchema.find();
    if (Offers.length > 0) {
      res.send(Offers);
    } else {
      res.send('no data found');
    }
  });


  app.delete('/offer/:id', async (req, res) => {
    let Offers = await OffersSchema.deleteOne({id:req.params.id});
    res.send(Offers);
  });
  
  app.get('/offer/:id', async (req, res) => {
    let Offers = await OffersSchema.findOne({ id: req.params.id });
    res.send(Offers);
  });
  
  app.put('/offer/:id', async (req, res) => {
    let Offers  = await OffersSchema.updateOne({id: req.params.id }, { $set: req.body });
    res.send(Offers);
  });


// Treatment




app.post('/treatment', async (req, res) => {
    let treatment= new TreatmentSchema(req.body);
    let result = await treatment.save();
    res.send(result);
  });

  app.get('/treatment', async (req, res) => {
    let treatment = await TreatmentSchema.find();
    if (treatment.length > 0) {
      res.send(treatment);
    } else {
      res.send('no data found');
    }
  });


  app.delete('/treatment/:id', async (req, res) => {
    let treatment = await TreatmentSchema.deleteOne({id:req.params.id});
    res.send(treatment);
  });
  
  app.get('/treatment/:id', async (req, res) => {
    let treatment = await TreatmentSchema.findOne({ id: req.params.id });
    res.send(treatment);
  });
  
  app.put('/treatment/:id', async (req, res) => {
    let treatment  = await TreatmentSchema.updateOne({id: req.params.id }, { $set: req.body });
    res.send(treatment);
  });



  


  //Doctor

  app.post('/doctor', async (req, res) => {
    let Offers = new  DoctorSchema(req.body);
    let result = await Offers.save();
    res.send(result);
  });

  app.get('/doctor', async (req, res) => {
    let Offers = await  DoctorSchema.find();
    if (Offers.length > 0) {
      res.send(Offers);
    } else {
      res.send('no data found');
    }
  });


  app.delete('/doctor/:id', async (req, res) => {
    let Offers = await  DoctorSchema.deleteOne({id:req.params.id});
    res.send(Offers);
  });
  
  app.get('/doctor/:id', async (req, res) => {
    let Offers = await  DoctorSchema.findOne({ id: req.params.id });
    res.send(Offers);
  });
  
  app.put('/doctor/:id', async (req, res) => {
    let Offers  = await  DoctorSchema.updateOne({id: req.params.id }, { $set: req.body });
    res.send(Offers);
  });





  //Appointment
  
  app.post('/Appointment', async (req, res) => {
    let Offers = new AppointmentSchema(req.body);
    let result = await Offers.save();
    res.send(result);
  });
  app.get('/Appointment', async (req, res) => {
    let Offers = await  AppointmentSchema.find();
    if (Offers.length > 0) {
      res.send(Offers);
    } else {
      res.send('no data found');
    }
  });


  app.delete('/Appointment/:id', async (req, res) => {
    let Offers = await  AppointmentSchema.deleteOne({id:req.params.id});
    res.send(Offers);
  });
  
  app.get('/Appointment/:id', async (req, res) => {
    let Offers = await  AppointmentSchema.findOne({ id: req.params.id });
    res.send(Offers);
  });
  
  app.put('/Appointment/:id', async (req, res) => {
    let Offers  = await  AppointmentSchema.updateOne({id: req.params.id }, { $set: req.body });
    res.send(Offers);
  });


  



  app.listen(4000)