const mongoose=require('mongoose');
const { loginUser } = require('../controllers/user.controller');
const bcrypt=require('bcryptjs');
const jwt=require('jsonwebtoken');


const captainSchema=mongoose.Schema({
    fullname:{
        firstname:{
            type:String,
            required:true,
            minlength:3,
        },
        lastname:{
            type:String,
            required:true,
        },
    },
    email:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
        match:[/^\S+@\S+\.\S+$/, 'Please fill a valid email address'],
    },
    password:{
        type:String,
        required:true,
        select:false,
    },
    socketId:{
        type:String,
    },status:{
        type:String,
        enum:['active','inactive'],
        default:'inactive',
    },
    vehicle:{
        color:{
            type:String,
            require:true,
            minlength:3,
        },
        plate:{
            type:String,
            required:true,
            minlength:3,
        },
        capacity:{
            type:Number,
            required:true,
            min:[1,'Capacity must be at least 1'],
        },
        vehicleType:{
            type:String,
            required:true,
            enum:['car','motorcycle','auto','bike'],
        },
    },
    location:{
        lat:{
            type:Number,
        },
        lng:{
            type:Number,
        },
    }
})


captainSchema.methods.generateAuthToken=async function(){
    const token=jwt.sign({_id:this._id},process.env.JWT_SECRET,{expiresIn:'24h'});
    return token;
}

captainSchema.methods.comparePassword=async function(password){
    const isMatch=await bcrypt.compare(password,this.password);
    return isMatch;
}

captainSchema.statics.hashPassword=async function(password){
    const salt=await bcrypt.genSalt(10);
    const hashedPassword=await bcrypt.hash(password,salt);
    return hashedPassword;
}
const captainModel=mongoose.model('captain',captainSchema);

module.exports=captainModel;
