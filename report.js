const bodyParser = require('body-parser');

const routes = require('express').Router()

// localhost:3000/report
routes.post('/', (req, res) => {
    console.log(req.body)
    res.send(200)
});

module.exports = routes;
