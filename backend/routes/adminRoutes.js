
const express = require('express')

const {AuthAdmin, Update_To_Process, Reject_Application, Approved_Application, Adding_Slot, Get_Slot, Get_Processing_app, Update_slot_details, Get_Application_Detail, Get_All_Application_List} = require('../controllers/adminController')

const router = express.Router()

      

router.route('/Admin_Login').post(AuthAdmin)

// router.route('/allApplication').get(Get_All_ApplicationList)
router.route('/Onprocess/:FormId').patch(Update_To_Process)

router.route('/AppReject/:FormId').patch(Reject_Application)

router.route('/AppApprove/:FormId').patch(Approved_Application)

router.route('/AddSlot').post(Adding_Slot)

router.route('/GetSlot').get(Get_Slot)

router.route('/getProcessingApp').get(Get_Processing_app)

router.route('/updateSlot').patch(Update_slot_details)

router.route('/ApplicatinDetails/:AppId').get(Get_Application_Detail)

router.route('/recordList').get(Get_All_Application_List)
 


module.exports = router;