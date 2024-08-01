const express = require('express');
const router = express.Router();
const WrestlerName = require('../models/WrestlerNames');

//Create a new name
router.post('add/', async(req, res) => {
  try {
    const { firstName, lastName } = req.body;
    const newName = new WrestlerName({ firstName, lastName });
    await newName.save();
    res.status(201).json(newName);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

//Get all names
router.get('/', async(req, res) => {
  try {
    const names = await WrestlerName.find();
    res.status(200).json(names);
  } catch(error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;