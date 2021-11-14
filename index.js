import dotenv from 'dotenv'
dotenv.config()

import express from 'express'
const app = express()

app.get('/status', (_, res) => {
    res.json({status: "OK"});
});

import mongoose from 'mongoose'
mongoose.connect(`mongodb://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.MONGODB_URL}:27017`, () => { console.log("MOngo db connected") });


app.use(express.json())

import Report from './dbschema.js'

app.post('/report', async (req, res) => {
    const { isDead, activity, location, date, media, desc, url, contact, urgency} = req.body;
        
    const newReport = new Report({
        isDead,
        act: activity,
        location,
        date: new Date(date),
        media,
        desc,
        url,
        contact,
        vote: 0,
        urgency,
    });
    await newReport.save();
    res.send(200)
});

app.get('/report', async (req, res) => {
    const doc = await Report.find().sort({ urgency: 'desc', date: 'desc', act: 'desc'}).lean();
    res.json(doc)
});

app.delete('/report', async (req, res) => {
    await Report.findById(req.body.id).deleteOne();
    res.send(200);
});

app.post('/vote', async (req, res) => {
    const doc = await Report.findById(req.body.id);
    let vote = doc.get('vote');
    vote++;
    doc.set('vote', vote);
    doc.save()
    res.send(200) 
});



app.listen(3000, () => { 
    console.log("App is listening on port 3000"); 
});

