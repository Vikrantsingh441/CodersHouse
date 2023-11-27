const otpService = require('../services/otp-service');
const HashService = require('../services/hash-service');
const hashService = require('../services/hash-service');

class AuthController {
    async sendOtp(req, res) {
        //logic
        const { phone } = req.body;
        if (!phone) {
            return res.status(400).json({ message: 'Phone field is required' });
        }
        const otp = await otpService.generateOtp()

        // hash otp 
        const ttl = 1000 * 60 * 2
        const expires = Date.now() + ttl
        const data = `${phone}.${otp}.${expires}`
        const hash = hashService.hashOtp(data)


        //send otp
        try {
            await otpService.sendBySms(phone, otp);
            res.json({
                hash: `${hash}.${expires}`,
                phone:phone
            })

        } catch (err) {
            console.log(err);
            res.status(500).json({ message: 'message sending failed' })
        }
        //     res.send(otp) 
    }

    verifyOtp(req,res){
        const {otp,hash,phone}=req.body;
        if(!otp||!hash||!phone){
            res.status(400).json({message:"All fields are required !"});
        }
        const [hashedOtp,expires] = hash.split('.')
        if (Date.now()>expires){
            res.status(400).json({message:"Otp expired"})
        }
        const data = `${phone}.${otp}.${expires}`
        const isValid = otpService.verifyOtp(hashedOtp,data)
        if(!isValid){
            res.status(400).json({message:'Invalid Otp'})
        }

        let user
        let accessToken
        let refreshToken
    }
}

module.exports = new AuthController(); //singleton pattern


//used class here to make code moduler and class name starts with a capital letter
// logic inside controllers are writeen in services ?? service layer