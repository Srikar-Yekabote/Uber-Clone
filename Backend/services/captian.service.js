const captainModel = require('../models/captain.model')

module.exports.createCaptain = async ({ email, password, firstname, lastname,color,plate,capacity,vehicleType }) => {
    if (!email || !password || !firstname || !lastname || !color || !plate || !capacity || !vehicleType) {
        throw new Error('Please fill all the fields')
    }
    const captain = captainModel.create({
        fullname: {
            firstname,
            lastname,
        },
        email,
        password,
        vehicle:{
            color,
            plate,
            capacity,
            vehicleType
        }
    })

    return captain;
}