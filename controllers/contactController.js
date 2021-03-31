const contactService = require('./../services/contactService');

const convertKebabToCamelObject = require('./../utils/kebabToCamel');

exports.getAllContacts = async (req, res) => {
  try {
    const contacts = await contactService.findContacts();
    res.status(200).json({
      status: 'success',
      length: contacts.length,
      data: {
        contacts,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      error,
    });
  }
};

exports.createContact = async (req, res) => {
  try {
    const newContact = await contactService.createContact(
      convertKebabToCamelObject(req.body)
    );

    res.status(201).json({
      status: 'success',
      data: {
        contact: newContact,
      },
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      status: 'fail',
      error,
    });
  }
};
