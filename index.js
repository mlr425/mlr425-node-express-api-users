import express from 'express'; //latest node, remember to add "type":"module" in package.json
// const express = require('express'); //older node vers
import bodyParser from 'body-parser'; //allows to take incoming post req bodies

import usersRoutes from './routes/users.js';

const app = express();
const PORT = 5000; //using a localDB / just an array for practice

app.use(bodyParser.json()) //middleware

app.use('/users', usersRoutes);


app.get('/', (req,res) => {
    res.send(`Hello, this is a simple API for creating, reading, updating, and deleting users from a local database (it's an array). 
    Navigate to http://localhost:${PORT}/users for a list of all users.
    You will need Postman or an application able to interact with the API.
    Check out routes/users.js for a list of all user routes.
    `);
});

//listen to reqs
app.listen(PORT,() => {
    console.log(`server running on port: http://localhost:${PORT}`);
})
