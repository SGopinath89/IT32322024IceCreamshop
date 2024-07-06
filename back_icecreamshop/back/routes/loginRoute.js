const express = require('express');
const Login = require('../models/loginModel');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const allLogins = await Login.find();
    res.json(allLogins);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.post('/', async (req, res) => {
  const { name, email, pwd } = req.body;

  const login = new Login({
    name: name,
    email: email,
    pwd: pwd
  });

  try {
    const newLogin = await login.save();
    res.status(201).json(newLogin);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});


module.exports = router;
