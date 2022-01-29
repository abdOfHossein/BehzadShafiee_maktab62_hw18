const express = require('express');
const router = express.Router();
const Blogger = require('../module/bloger');

const { body, validationResult } = require('express-validator');
const validator = require('validator');






router.get('/page', (req, res) => {

    res.render('registerPage',{error:null});
})

router.post('/page/doing', [
    body('userName').notEmpty().withMessage("userName is empty").isLength({ min: 2 }).withMessage('username must be at least 2 charcator'),
    body('password').notEmpty().withMessage("password is empty").isLength({ min: 8 }).withMessage('password must be at least 8 charcator'),
    body('firstName').notEmpty().withMessage("firstName is empty").isLength({ min: 2, max: 30 }).withMessage('firstname must be between 2-30'),
    body('lastName').notEmpty().withMessage("lastName is empty").isLength({ min: 2, max: 30 }).withMessage('lastname must be between 2-30'),
    body('phoneNumber').notEmpty().withMessage("phoneNumber is empty")
]
    , (req, res) => {
        console.log(req.body);
        const phoneNumber = req.body.phoneNumber;
        console.log(phoneNumber);
        console.log(validator.isMobilePhone(phoneNumber,['fa-IR']));
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            console.log(errors);
            return  res.render('registerPage',{error:'something is wrong!!!'});
        }


        const regExp = /^(?=[^A-Z\n]*[A-Z])(?=[^a-z\n]*[a-z])(?=[^0-9\n]*[0-9])(?=[^#?!@$%^&*\n-]*[#?!@$%^&*-]).{8,}$/g;
        const checkPass = regExp.test(req.body.password);
        if (!checkPass) {
            console.log(req.body.password);
            console.log('password must be atleast one capital letter one small letter one number one special letter');
           return  res.render('registerPage',{error:'something is wrong!!!'});
        }

        const checkReg = async () => {
            try {
                const checkIsExistUser = await Blogger.findOne({ userName: req.body.username });
                if (checkIsExistUser === null) {
                    Blogger.insertMany(req.body)
                        .then(() => {
                          
                            return res.render('loginPage',{msg:'you register succussfully'})
                        })
                        .catch(err => console.log(`err of inserting new user:${err}`))

                }
                else {
                    return res.render('errorPage', { error: 'user with this info already existed' });
                }
            }
            catch (err) {
                console.log(`not found err:${err}`);
            }


        }
        checkReg();
    });









module.exports = router;