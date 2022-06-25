import mongoose from 'mongoose';

const customerSchema = new mongoose.Schema({
    id:{
        type: String,
        required: true
    },
    name:{
        type:String,
        required:false
    },
    phone:{
        type:String,
        required:false
   },
   email:{
       type:String,
       required:false
   },
   password:{
        type:String,
        required:false
   }
})

const customer = mongoose.model('customer', customerSchema);

export default customer;