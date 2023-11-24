const otpService = require('../services/otp-service');

class AuthController {
    sendOtp(req,res){
        //logic
        const {phone} = req.body;
        if(!phone){
            return res.status(400).json({ message: 'Phone field is required' });
        }
        res.json(otpService.generateOtp());
        // const otp = otpService.generateOtp()
        //     res.send(otp)
    }
}

module.exports = new AuthController(); //singleton pattern


//used class here to make code moduler and class name starts with a capital letter
// logic inside controllers are writeen in services ?? service layer