// CRUD OPERATION FOR USER 
const asyncHandler =require("express-async-handler")

const User = require("../models/userModel");
const slugify  = require("slugify");


// @Desc Create a new user
// @Route POST /medicalcare/users
// @Access Private (admin)
exports.createUser = asyncHandler(async(req, res)=>{
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;
    const phone = req.body.phone;
    const gender = req.body.gender;
    const user = await User.create({name:name, slug:slugify(name), email:email, password:password, phone:phone, gender:gender})
    res.status(201).json({data : user})
})
// @Desc Get list of users
// @Route GET /medicalcare/users
// @Access public
exports.getUsers = asyncHandler(async (req , res)=>{
    const users = await User.find();
    res.status(200).json({results: users.length, data: users})
})
// @Desc get specific user
// @Route GET /medicalcare/users/:id
// @Access public

// @Desc Update specific user
// @Route PUT /medicalcare/users/:id
// @Access Private

// @Desc Delete specific user
// @Route DELETE /medicalcare/users/:id
// @Access Private