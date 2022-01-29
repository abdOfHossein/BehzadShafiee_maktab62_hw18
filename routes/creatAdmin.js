// const express = require('express');
// const router = express.Router();
// const Blogger = require('../module/bloger');
// const _ = require('lodash');

// router.post('/creatAdmin', (req, res) => {
//     const dataAdmin = _.pick(req.body, ["password", "firstName", "lastName", "userName", "gender", "phoneNumber", "role"]);
//     try {
//         async function creatAdmin() {
//             const existedAdmini = await Blogger.findOne({ role: 'admin' });

//             if (existedAdmin) {
//                 return res.status(404).send('not found');
//             }
//             const admin = Blogger.create({ dataAdmin })
//             res.send({
//                 user
//             })


//             res.status(500).send(`err of creatAdmin:${err}`)


//         }
//     } catch (error) {

//     }

// })


// module.exports = router;