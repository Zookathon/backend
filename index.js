const express = require('express')

require('dotenv').config

const app = express()

app.get('/status', (_, res) => {
    res.json({status: "OK"});
});

const mongoose = require('mongoose')
mongoose.connect(`mongodb://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.MONGODB_URL}:27017`, () => { console.log("MOngo db connected") });

const Cat = mongoose.model('Cat', { name: String });

const kitty = new Cat({ name: 'Zildjian' });
kitty.save().then(() => console.log('meow'));

app.listen(3000, () => { 
    console.log("App is listening on port 3000"); 
});

