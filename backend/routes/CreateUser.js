const express = require('express')
const router = express.Router()
const User = require('../models/User');
const { body, validationResult } = require('express-validator');


router.post("/createuser", body('email').isEmail(),
body('name','Incorrect Email').isLength({ min: 5 }),
body('password','Incorrect password').isLength({ min: 5 }),async (req,res)=>{

    const error = validationResult(req);
    if(!error.isEmpty())
    {
        return res.status(400).json({errors:error.array()});
    }
    try {
       await User.create({

            name: req.body.name,
            password: req.body.password,
            email: req.body.email,
            location: req.body.location
        })
         res.json({success:true});
    }
    catch(error){
        console.log(error)
        res.json({sucess:false});

    }
})

module.exports = router;
