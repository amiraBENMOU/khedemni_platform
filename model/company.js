const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const companySchema = new Schema({
    name: String,
    address: String,
    phoneNumber: String,
});

module.exports = model('Company', companySchema);
