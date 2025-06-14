const mongoose = require('mongoose');
const bcrypt =require('bcryptjs');
const jwt = require('jsonwebtoken');



const UserSchema = new mongoose.Schema({
    fullname:{
        firstname:{
            type:String,
            required:true,
            minlength:[3,'firstname must be at least 3 characters'],
        },
        lastname:{
            type:String,
            minlength:[3,'firstname must be at least 3 characters'],
        },
    },
    email:{
        type:String,
        require:true,
        unique:true,
        minlength:[5,'email must be at least 3 characters'],
    },
    password:{
        type:String,
        require:true,
        select:false,
    },
    socketId:{
        type:String,
    },
});

UserSchema.methods.generateAuthToken = async function () {
    const token = jwt.sign({ _id: this._id }, process.env.JWT_SECRET, { expiresIn: '24h' });
    return token;
}

UserSchema.methods.comparePassword = async function (password) {  
    return await bcrypt.compare(password, this.password);  
}

UserSchema.statics.hashPassword = async function (password) {
    return await bcrypt.hash(password, 10);  
}


const UserModel= mongoose.model('User', UserSchema);
module.exports=UserModel;