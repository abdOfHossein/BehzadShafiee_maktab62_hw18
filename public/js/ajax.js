// $('#btn-signUp').click(function (e) {
//     const data = {
//         'firstName': $('#firstName').val(),
//         'lastName': $('#lastName').val(),
//         'userName': $('#userName').val(),
//         'password': $('#password').val(),
//         'phoneNumber': $('#phoneNumber').val(),
//         'gender': $('input[name=gender]:checked').val(),
//     }
//     $('').change(function (e) {
//         e.preventDefault();
//         const divImg = $('#img');
//         const img=$('#img-reg').val();
       
//         data.img=img;
//     });

//     // e.preventDefault();
//     // let tmpUserName = '';
//     // let tmpPass = '';
//     // let tmpFName = '';
//     // let tmpLName = '';
//     // let tmpPhone = '';
//     // const alarmPass = $('#alarm-password');
//     // const alarmUserName = $('#alarm-userName');
//     // const alarmFirstName = $('#alarm-firstName');
//     // const alarmLastName = $('#alarm-lastName');
//     // const alarmPhoneNumber = $('#alarm-phoneNumber');
//     // const generalErr = $('#generalErr');
//     // fetch('localhost:3000/register/page/doing'{
//     //     body:JSON.stringify(data)
//     // })

// });

// if (err.errors) {
//     for (const err of res.errors) {
//         console.log(err);

//         if (err.param == 'userName') {

//             tmpUserName += err.msg + '&';
//         }
//         alarmUserName.text(tmpUserName);

//         if (err.param == 'password') {

//             tmpPass += err.msg + '&';

//         }
//         alarmPass.text(tmpPass);

//         if (err.param == 'firstName') {

//             tmpFName += err.msg + '&';
//         }
//         alarmFirstName.text(tmpFName);

//         if (err.param == 'lastName') {

//             tmpLName += err.msg + '&';
//             console.log(tmpLName);
//         }
//         alarmLastName.text(tmpUserName);

//         if (err.param == 'phoneNumber') {

//             tmpUserName += err.msg + '&';
//             console.log(tmpPhone);
//         }
//         alarmPhoneNumber.text(tmpPhone);
//     }

// }

// $('#btn-signUp').click(function (e) {
//     const data = {
//         'firstName': $('#firstName').val(),
//         'lastName': $('#lastName').val(),
//         'userName': $('#userName').val(),
//         'password': $('#password').val(),
//         'phoneNumber': $('#phoneNumber').val(),
//         'gender': $('input[name=gender]:checked').val(),
//     }
//     $('').change(function (e) {
//         e.preventDefault();
//         const divImg = $('#img');
//         const img=$('#img-reg').val();
       
//         data.img=img;
//     });
//     const generalErr=$('#generalErr');
// $.ajax({
//     type: "POST",
//     url: "http://localhost:3000/register/page/doing",
//     success: function (res) {
//         console.log(res);
//         generalErr.html(res)
//     },
//     err:(err)=>{
//         console.log(`err ajax :${err}`);
//         generalErr.html(err)
//     }
// });
// });
