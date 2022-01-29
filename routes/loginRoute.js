const express = require('express');
const router = express.Router();
const Blogger=require('../module/bloger');
const { body, validationResult } = require('express-validator');
const _=require('lodash');





router.get('/page', (req, res) => {
    res.render('loginPage',{msg:null});
});

router.post('/page/doing', [
    body('userName').notEmpty().withMessage("userName is empty"),
    body('password').notEmpty().withMessage("password is empty")
], (req, res) => {
    const error = validationResult(req);
    if (!error.isEmpty()) {
        return res.render('loginPage',{msg:'userName and password must fill'});
    }

    const checkLogin = async () => {
      
        try {
            const blogger = await Blogger.findOne({ userName: req.body.userName });
            console.log(blogger);
            if (!blogger) {
                return res.render('loginPage',{msg:'something is wrong!!!'});
            }
            else{
               res.cookie('user_side',blogger._id);
               req.session.blogger=blogger;
            //    return res.render('dashboard',blogger);
            return res.redirect('/auth/dashboard');
            }
        }
        catch (err) {
            console.log(`not found err:${err}`);
        }


    }
    checkLogin();
});





module.exports = router;