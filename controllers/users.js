import {v4 as uuidv4} from 'uuid';

//our database (just an array for practice purposes)
let users = []

//https://restfulapi.net/http-status-codes/

export const createUser = (req,res) => {
    try{
        // throw 'gkkf'; //test error
        users.push({...req.body, id:uuidv4()})
        res.status(201).json({message:"user created - status 201"})
    }catch(err){
        //send your error out or retry creating the user.. etc add flow control here
        res.status(500).json({message:"Error creating user - status 500"});
    }
}

export const getUsers = (req,res) => {
    try{
        // throw 'gkkf'; //test error
        res.send(users);
    }catch(err){
        res.status(500).json({message:"Error getting users - status 500"});
    }
}

export const getUser =(req,res)=>{
    try{
        const {id} = req.params;
        const foundUser = users.find((user) => user.id === id);
        res.send(foundUser)
    }catch(err){
        res.status(404).json({message:"Error finding user - status 404"});
    }
}

export const deleteUser = (req,res) => {
    try {
        const {id} = req.params;
        users = users.filter((user) => user.id !== id);
        res.send(`user deleted`);
    } catch (error) {
        res.status(500).json({message:"Error deleting user - status 500"});
    }
}

export const updateUser = (req,res)=>{
    try {
        const {id} = req.params;
        const { firstName, lastName, age} = req.body;
        const targetUser = users.find((user) => user.id === id)

        if (firstName){
            targetUser.firstName = firstName;
        }

        if (lastName){
            targetUser.lastName = lastName;
        }

        if (age){
            targetUser.age = age;
        }

        res.send(`${id} has been updated`);
    } catch (error) {
        res.status(500).json({message:"Error updating user - status 500"}); 
    }
}

/*
play data
const users = [
    {
        firstName:"Bob",
        lastName:"Smith",
        age: 25
    },
    {
        firstName:"Jane",
        lastName:"Smith",
        age: 21
    },
    {
        firstName:"Tom",
        lastName:"Doe",
        age: 70
    },
]
*/