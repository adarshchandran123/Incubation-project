
const asyncHandler = require('express-async-handler');

const Admin = require('../models/adminModel');

const Slot = require('../models/Slot')

const Application = require("../models/applicationModel");
var mongoose = require('mongoose')


const AuthAdmin = ((req,res)=>{ 
    const {email,password} = req.body;
    
    
    if(process.env.ADMIN_EMAIL === email && process.env.ADMIN_PASSWORD === password){
        res.json({
            email:email,
            password:password,
        })
        
    }else{
        res.status(400)
        throw new Error("invalid Email or password")
    }
})  


const Update_To_Process = asyncHandler(async (req, res) => {
    Application.updateOne({ _id: req.params.FormId },{$set:{status:"Process"}}).then(
      (response) => {
        res.json(response);
      }
    );
  });

  const Reject_Application = asyncHandler(async (req, res) => {
    Application.updateOne({ _id: req.params.FormId },{$set:{status:"Reject"}}).then(
      (response) => {
        res.json(response);
      }
    );
  });

  const Approved_Application = asyncHandler(async (req, res) => {
    Application.updateOne({ _id: req.params.FormId },{$set:{status:"Approve"}}).then(
      (response) => {
        res.json(response);
      }
    );
  });


  const Adding_Slot = asyncHandler(async (req, res) => {
    Slot.create({}).then(
      (response) => {
        res.json(response);
      }
    );
  });


  const Get_Slot = asyncHandler(async (req, res) => {
    Slot.find({}).then(
      (response) => {
        res.json(response);
      }
    );
  });

     const Get_Processing_app = asyncHandler(async (req, res) => {
    Application.find({status : "Process"}).then(
      (response) => {
        res.json(response);
      }
    );
  });


  const Update_slot_details = asyncHandler(async (req, res) => {
    const{slotId,appId,index} = req.body
    Slot.updateOne({_id:slotId},
      {$set:{
        ApplicationId:appId,
        SeatNumber:index,
        IsActive:true
      }}).then(
      (response) => {
        res.json(response);
      }
    );
  });


  const Get_Application_Detail = asyncHandler(async (req, res) => {
    Application.findById(req.params.AppId).then(
      (response) => {
        res.json(response);
      }
    );
  });


  const Get_All_Application_List = asyncHandler(async (req, res) => {
    Application.find({}).then(
      (response) => {
        res.json(response);
      }
    );
  });





module.exports = {AuthAdmin,Update_To_Process,Reject_Application,Approved_Application,Adding_Slot,Get_Slot,Get_Processing_app,Update_slot_details,Get_Application_Detail,Get_All_Application_List}
