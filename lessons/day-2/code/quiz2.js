'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
const router2 = express.Router();
const uuid = require('uuid/v4');

const app = express();

const users = [
  {
    id: '1c066fdc9-5f6f-4e05-8d4c-66dd73d3210e',
    name: 'Phil',
  },
  {
    id: '50bf253d-a758-445e-b597-80146a5604b0',
    name: 'Mary',
  },
  {
    id: 'ac99815f-1d56-4ab4-8630-a31045f61401',
    name: 'Bailey',
  },
  {
    id: 'f1fcbc30-6669-4438-9db3-e0fd9e028d96',
    name: 'Harper',
  }
];

router.route('/v1/users')
    .get((req, res) => {
        res.json({
            data: users
        });
    })

router.route('/v2/users')
    .get((req, res) => {

        const newUsers = users.map((item) => {
            return { id: item.id, firstName: item.name };
        });

        res.json({
            data: newUsers
        });
    })

// router2.route('/users')
//     .get((req, res) => {

//         const newUsers = users.map((item) => {
//             return { id: item.id, firstName: item.name };
//         });

//         res.json({
//             data: newUsers
//         });
//     })



//Set body parser
app.use(bodyParser.json());

//Telling our express instance to pass this route to the router
app.use('/api', router);
//app.use('/api/v2/', router2);

app.listen(5000, () => {
  console.log('Quiz Question 2: is running...');
});