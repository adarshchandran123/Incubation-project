const express = require('express');
const { registerUser, AuthUser,Apply_Application, Get_ApplicationList, Delete_ApplicationListItem ,Get_Form_Details, Get_All_ApplicationList} = require('../controllers/usercontroller');

const router = express.Router()

router.route('/signup').post(registerUser)

router.route('/login').post(AuthUser);
 
router.route('/createBooking').post(Apply_Application);

router.route('/mybooking/:userId').get(Get_ApplicationList);

router.route('/mybooking/:id').delete(Delete_ApplicationListItem);

router.route('/mybooking').get(Get_All_ApplicationList);

router.route('/mybookings/:FormId').get(Get_Form_Details);
 
module.exports = router;
