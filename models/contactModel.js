// firstName, lasyName, phoneNumber, note
const mongoose = require('mongoose');
const { isMobilePhone } = require('validator');

const contactSchema = new mongoose.Schema({
  firstName: {
    type: String,
    maxLength: 100,
  },
  lastName: {
    type: String,
    maxLength: 100,
  },
  phoneNumber: {
    type: String,
    maxLength: 20,
    required: true,
    validate: isMobilePhone,
  },
  note: {
    type: String,
    maxLength: 200,
  },
});

const Contact = mongoose.model('Contact', contactSchema);

module.exports = Contact;
