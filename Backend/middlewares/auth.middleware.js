const jwt = require('jsonwebtoken');
const UserModel = require('../models/user.model'); // Make sure path is correct
const BlacklistTokenModel = require('../models/blacklistToken.model'); // Make sure path is correct
const captainModel = require('../models/captain.model');

module.exports.authUser = async (req, res, next) => {
    const token = req.cookies.token || req.headers.authorization?.split(' ')[1]; // Check for token in cookies or headers
    if (!token) {
        return res.status(401).json({ message: 'Unauthorized' });
    }
    const isBlacklisted = await BlacklistTokenModel.findOne({ token });
    if (isBlacklisted) {
        return res.status(401).json({ message: 'Unauthorized' });
    }
    
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await UserModel.findById(decoded._id);
        if (!user) {
            return res.status(401).json({ message: 'Unauthorized' });
        }
        req.user = user;
        next();
    } catch (error) {
        return res.status(401).json({ message: 'Unauthorized' });
    }
}


module.exports.authCaptain = async (req, res, next) => {
    const token = req.cookies.token || req.headers.authorization?.split(' ')[1]; // Check for token in cookies or headers
    if (!token) {
        return res.status(401).json({ message: 'Unauthorized' });
    }
    const isBlacklisted = await BlacklistTokenModel.findOne({ token });
    if (isBlacklisted) {
        return res.status(401).json({ message: 'Unauthorized' });
    }
    
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const captain = await captainModel.findById(decoded._id);
        if (!captain) {
            return res.status(401).json({ message: 'Unauthorized' });
        }
        req.captain = captain;
        return next();
    } catch (error) {
        return res.status(401).json({ message: 'Unauthorized' });
    }
}
