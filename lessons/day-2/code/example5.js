'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();

const app = express();

router.route('/*')
    //GET req
    .get((req, res) => {
        res.json({
            data: {
                path: req.path,
                method: req.method
            }
        });
    })
    //POST
    .post((req, res) => {
        console.log(req);
        res.json({
            data: {
                path: req.path,
                method: req.method,
                payload: req.body
            }
        });
    });

//Set body parser
app.use(bodyParser.json());   

//Telling our express instance to pass this route to the router
app.use('/api', router);

app.listen(5000, () => {
    console.log('Ex 5 is running...');
});