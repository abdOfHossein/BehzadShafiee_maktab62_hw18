const express = require('express');
const router = express.Router();
const UserCollection = require('../modules/module');


router.post('/ckeckData', (req, res) => {

    UserCollection.findOne({ username: req.body.userName }, (err, data) => {
        if (err) {
            return console.log(err);
        }
        if (data) {
            console.log(data);
            return console.log(`err username already existed`);
        }
        // const result=JSON.stringify(req.body)
        return res.render('errorPage',{error:'user with this info already existed'});
    })


})







module.exports = router;