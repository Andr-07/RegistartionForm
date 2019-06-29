const express = require('express');
const Registration = require('./models/registration');

const router = express.Router();


router.post('/regUser', async function (req, res, next) {
  let saveUser = new Registration({
    userName: req.body.userName,
    email: req.body.email,
    password: req.body.password
  })
  // await saveUser.save();
  console.log(">>>>>>>>",saveUser)
  res.json()
});

router.post('/login', async function (req, res, next) {
  let user = await Registration.findOne({email:req.body.email})
  let message = '';
  let name = user.userName;
  if (user == null) {
    message = "User doesn't exist"
    console.log(message)
  } else if (req.body.password!==user.password) {
  message = "Incorrect password"
  console.log(message)
  } else {
    message = "Succesful login"
    console.log(message)
  }
  res.json({message, name})
});



module.exports = router;