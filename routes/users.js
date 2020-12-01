/*
all routes in here start with /users
*/

import express from 'express';
import {
    createUser,
    getUsers, 
    getUser,
    deleteUser, 
    updateUser} from '../controllers/users.js';

const router = express.Router();

router.get('/',getUsers);

router.post('/', createUser);

router.get('/:id',getUser);

router.delete('/:id',deleteUser);

router.patch('/:id',updateUser);

export default router;










//a lot of logic mixed in with the routes,
//so separate logic n routes. logic in controllers, users.js
// router.post('/', (req,res) => {
//     users.push({...req.body, id:uuidv4()})
//     res.send(`User: ${req.body.firstName} has been created`);
// });

//equiv to

//router.post('/', createUser);
//                  ^ & the logic is stored elsewhre 


//how can we get the id? its stored in req.params
//users/2 lets say we want the 2, => req.params -> {id:2}
// router.get('/:id',(req,res)=>{
//     const {id} = req.params;
//     const foundUser = users.find((user) => user.id === id);
//     res.send(foundUser)
// });