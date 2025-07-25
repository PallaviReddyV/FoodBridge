/*{const express = require('express');
const router = express.Router();
const Ngoregister = require('../Models/Ngoregister');

router.post('/', async (req, res) => {
  const reg=new reg({
    yourName:req.body.yourName,
    ngoEmail:req.body.ngoEmail,
    ngoName:req.body.ngoName,
    ngoAddress:req.body.ngoAddress,
    phoneNumber:req.body.phoneNumber,
    password:req.body.password 
  })
  try{
    const register=await reg.save()
    res.json(register)
  }
  catch(err)
  {
    res.send('Error')
  }
})

  // Handle registration logic here
  // Make sure to validate input and hash passwords before storing in the database
  // try {
    // const newNgoregister = await Ngoregister.create(req.body);
    // res.status(200).json({ message: 'Registration successful', user: newNgoregister });
  // } catch (error) {
    // console.error('Registration error:', error.message);
    // res.status(500).json({ message: 'Internal server error' });
  // }
  // });

module.exports = router;
}*/
const express = require('express');
const router = express.Router();
const Ngoregister = require('../Models/Ngoregister');

router.post('/', async (req, res) => {
  const reg = new Ngoregister({
    yourName: req.body.yourName,
    ngoEmail: req.body.ngoEmail,
    ngoName: req.body.ngoName,
    ngoAddress: req.body.ngoAddress,
    phoneNumber: req.body.phoneNumber,
    password: req.body.password 
  });

  try {
    const register = await reg.save();
    res.json(register);
  } catch(err) {
    res.send('Error');
  }
});

module.exports = router;

