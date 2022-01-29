const express = require('express');
const router = express.Router();
const Blogger=require('../module/bloger');
const { body, validationResult } = require('express-validator');
const _=require('lodash');



router.get('/dashboard', (req, res) => {
    res.render('dashboard',{blogger:req.session.blogger});
});




module.exports=router;