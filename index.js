const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const userModel = require('./models/user');
const bodyParser = require('body-parser');
const petModel = require('./models/pets');
const route = require('./routes/UserRouter');
const dotenv = require('dotenv');
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({limit:'10mb'}));
app.use(express.urlencoded({ limit:'10mb',extended:true }));
const PORT = process.env.PORT;
const MONGOURL = process.env.MONGOURL;
// mongoose.connect('mongodb+srv://Akash_Kumaran:Akash%4004@cluster0.dji8b.mongodb.net/PET_ADOPTION')

mongoose
    .connect(MONGOURL)
    .then(() => {
        console.log("Database connected");
        app.listen(PORT, () => {
            console.log(`Listening on port ${PORT}`);
        });
    })
    .catch((error) => console.error('Error connecting to MongoDB:', error));

app.use('/', route);
// app.post('/createPet', (req, res) => {
//     petModel.create(req.body)
//     .then(users => res.json(users))
//     .catch(err => res.json(err))
// })
// app.post('/createUser', (req, res) => {
//     userModel.create(req.body)
//     .then(users => res.json(users))
//     .catch(err => res.json(err))
// })

// app.get('/fetchPet', (req, res) => {
//     petModel.find({})
//     .then(users=>res.json(users))
//     .catch(err => res.json(err))
// })

// app.get('/getPet/:id', (req, res) => {
//     const id = req.params.id;
//     petModel.findById({_id : id})
//     .then(users=>res.json(users))
//     .catch(err => res.json(err))
// })
// app.get('/getUser/:id', (req, res) => {
//     const id = req.params.id;
//     userModel.findById({_id : id})
//     .then(users=>res.json(users))
//     .catch(err => res.json(err))
// })

// app.put('updateUser/:id', (req, res) => {
//     const id = req.params.id;
//     userModel.findByIdAndUpdate({_id : id}, {
//         name : req.body.name,
//         email : req.body.email,
//         password : req.body.password
//     })
// })

// app.delete('/deleteUser/:id', (req, res) =>{
//     const id = req.params.id;
//     userModel.findByIdAndDelete({_id : id})
//     .then(users=>res.json("deleted"))
//     .catch(err => res.json(err))
//     // res.status(200).json("deleted");
// })

// app.listen(3005, () => {
//     console.log("Server is running");
// })