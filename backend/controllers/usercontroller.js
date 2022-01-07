const asyncHandler = require("express-async-handler");
const Application = require("../models/applicationModel");
const User = require("../models/userModel");
const generateTocken = require("../utils/generateTocken");
var mongoose = require('mongoose')
var ObjectId = mongoose.Types.ObjectId();

const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password, mobile } = req.body;
  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error("User Already Exists");
  }
  const user = await User.create({
    name,
    email,
    password,
    mobile,
  });

  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      password: user.password,
      mobile: user.mobile,
      isAdmin: user.isAdmin,
      email: user.email,
      tocken: generateTocken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("somthing Error");
  }

  res.json({
    name,
    email,
  });
});

const AuthUser = asyncHandler(async (req, res) => {
  
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      name: user.name,
      password: user.password,
      mobile: user.mobile,
      isAdmin: user.isAdmin,
      email: user.email,
    });
  } else {
    res.status(400);
    throw new Error("invalid Email or password");
  }
});

const Apply_Application = asyncHandler(async (req, res) => {
  
  const {
    name,
    city,
    email,
    companyName,
    address,
    state,
    mobile,
    companyBackground,
    companyAndProduct,
    companyProblems,
    solution,
    proposition,
    competitors,
    revenueModel,
    potentialMarketSize,
    marketProductAndService,
    incubation,
    userId,
    status,
  } = req.body;

  const application = Application.create({
    name,
    city,
    email,
    companyName,
    address,
    state,
    mobile,
    companyBackground,
    companyAndProduct,
    companyProblems,
    solution,
    proposition,
    competitors,
    revenueModel,
    potentialMarketSize,
    marketProductAndService,
    incubation,
    userId,
    status,
  })
    .then(() => {
      res.json({
        message: "application created",
      });
    })
    .catch((err) => {
      res.status(400);
      throw new Error(err);
    });
});

const Get_ApplicationList = asyncHandler( (req, res) => {
   Application.find({ userId: req.params.userId }).then(
    (response) => {
      res.json(response);
    }
  );
});

const Get_All_ApplicationList = asyncHandler( (req, res) => {
   Application.find({}).then((response) => {
    res.json(response);
  });
});


const Delete_ApplicationListItem = asyncHandler( (req, res) => {
   Application.deleteOne({ _id: req.params.id }).then(
    (response) => {
      res.json(response);
    }
  );
});

const Get_Form_Details = asyncHandler(async (req, res) => {
  
  const application = await Application.findById(req.params.FormId);
  
  res.status(201).json(application);
});

module.exports = {
  registerUser,
  AuthUser,
  Apply_Application,
  Get_ApplicationList,
  Delete_ApplicationListItem,
  Get_All_ApplicationList,
  Get_Form_Details,
};
