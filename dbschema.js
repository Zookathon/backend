const mongoose = require('mongoose')

const { Schema} = mongoose

const reportSchema = new Schema({
    date: Date,
    location: String,
    image: [{data: Buffer, contentType: String}]
});
