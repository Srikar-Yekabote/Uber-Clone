const userModel=require('../models/user.model');


module.exports.createUser=async ({email, password, firstname, lastname})=>{
    if(!email || !password || !firstname ){
        throw new Error('Please fill all the fields')
    }
    const user=userModel.create({
        fullname:{
            firstname,
            lastname,
        },
        email,
        password,
    })

    return user; 
}   

