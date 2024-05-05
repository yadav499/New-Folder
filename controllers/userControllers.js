const userModel = require("../models/userModel");
exports.defaultvalue =(req,res)=>{
   res.send({
    status:200,
    message:"Hello , Welcome to your first get rest Api"
   })
}

//send the userDetails to database

exports.sendcontact =async(req,res)=>{
 const {name, email, organisation, phoneNo, message } = req.body;
    try{
   if(!name || !email || !organisation||!phoneNo || !message  ){
  return  res.send({
        status:401,
        message:"Pls fill all the fields"
    })
 }
 const user = new userModel({name, email, organisation, phoneNo, message});
 await user.save();
 return res.status(200).send({
    success:true,
    message: "Sent successfully",
    user
 })

}
catch(error){
    console.log(error);
   return res.status(401).send({
        success:false,
        message:"Error while sending the form",
        error
    })
}
}

//fetch all the contact details

exports.fetchdetails = async(req,res)=>{
    try {
      const user = await userModel.find();
      return res.status(200).send({
        success: true,
        message: "fetch all the contact details successfully",
        user

      })
        
    } catch (error) {
        console.log(error);
        return res.status(500).send({
            success: false,
            message:"Error while fetching the details",
            error
        })
    }
}