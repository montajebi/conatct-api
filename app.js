const express = require('express');

const router = require('./routes');

const app = express();

// middleware
app.use(express.json());

// routes
app.use('/api/v1/contacts', router.contactRouter);

app.all('*', (req, res) => {
  res.status(404).json({
    status: 'fail',
    error: {
      message: 'Not found!',
    },
  });
});

// TODO: global error handler

module.exports = app;
