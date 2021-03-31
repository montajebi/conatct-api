const express = require('express');

const contactController = require('./../controllers/contactController');

const router = express.Router();

router.get('/', contactController.getAllContacts);

router.post('/', contactController.createContact);

module.exports = router;
