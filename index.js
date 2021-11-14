const express = require('express')

const app = express()

app.get('/status', (_, res) => {
    res.json({status: "OK"});
});

app.listen(3000, () => { 
    console.log("App is listening on port 3000"); 
});

