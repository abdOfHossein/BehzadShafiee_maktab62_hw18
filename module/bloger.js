const mongoose = require('mongoose');
const bloggerData = require('../data/bloggerData.json');
const timestamp=require('time-stamp');

(async function connectMongodb() {

    try {

        const connection = await mongoose.connect('mongodb://localhost:27017/weblog');
        console.log(`server connected to mongodb`);
        return


    } catch (error) {

        console.log(`server not connect to mongoose err is:${err}`);
        return;
    }

})();
const bloggerSchema = new mongoose.Schema({

    "firstName": {
        type: [String, 'firstName must be String'],
        required: [true, 'firstName must filles'],
        trim: true,
        minlength: [3, 'firstName atleast is 3 character'],
        maxlength: [15, 'firstName maximum is 15 character']

    },
    "lastName": {
        type: [String, 'lastName must be String'],
        required: [true, 'lastName must filles'],
        trim: true,
        minlength: [3, 'lastName atleast is 3 character'],
        maxlength: [15, 'lastName maximum is 15 character']
    },
    "userName": {
        type: [String, 'lastName must be String'],
        required: [true, 'lastName must filles'],
        trim: true,
        minlength: [3, 'lastName atleast is 3 character'],
        maxlength: [20, 'lastName maximum is 15 character'],
        unique: [true, 'this userName already existed']

    },
    "password": {
        type: [String, 'password must be String'],
        required: [true, 'password must filles'],
        trim: true,
        max: [20, 'password maximum is 8 character'],

    },
    "gender": {
        type: String,
        enum: {
            values: ['female', 'male']
        },
        default: 'female'
    },
    // "profileImage":{

    // },
    "phoneNumber": {
        type: Number,
        required: true,
        trim: true,
    },
    "role":{
        type: String,
        enum: {
            values: ['admin', 'blogger']
        },
        default: 'blogger'
    }
});

// bloggerSchema.plugin('timestamp');

const Blogger = mongoose.model('Blogger', bloggerSchema);

// async function creatBloggerData() {
//     try {

//         const data = new Blogger({
        
//                 "userName": "abdOfHossein",
//                 "password": "1234Kh5678",
//                 "firstName": "ali",
//                 "lastName": "mohammady",
//                 "gender": "male",
//                 "phoneNumber": "09356874415"
            
//       })
//       const result=await data.save();

//     console.log(`can not insert data err:${err}`)



// } catch (err) {
//     console.log(`can not insert data err:${err}`)

// }
// return
// };
// creatBloggerData();
// //===============>err:Operation `bloggers.insertMany()` buffering timed out after 10000ms


module.exports = Blogger;