const mongoose = require('mongoose');
require('dotenv').config();
const connectionString = process.env.CONECTION_STRING;

exports.connect = async () => {
  try {
    await mongoose.connect(
      connectionString,

      {
        useNewUrlParser: true,
      },

      (err) => {
        if (err) return console.log('Error: ', err);
        console.log('MongoDB Connection -- Ready state is:', mongoose.connection.readyState);
      }
    );
  } catch (error) {
    console.log(error);
  }
};
