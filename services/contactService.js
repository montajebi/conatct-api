const Contact = require('./../models/contactModel');

exports.findContacts = async (query = {}) => {
  const contacts = Contact.find(query);
  return contacts;
};

exports.createContact = async (contactObj) => {
  const newContact = await Contact.create(contactObj);
  return newContact;
};
