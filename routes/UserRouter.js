const userModel = require('../models/user')
const petModel =require('../models/pets')
const express=require('express');
const route=express.Router();
const { create } =require ('../controller/UserContoller');
const { fetch } =require('../controller/UserContoller');
const { fetchPet } = require('../controller/UserContoller');
const { createPet } = require('../controller/UserContoller');
const { final } = require('../controller/UserContoller');
const { search } = require('../controller/UserContoller');
route.post('/create',create);
route.post('/fetch',fetch);
route.get('/fetchPet',fetchPet);
route.post('/createPet',createPet);
route.post('/final',final);
route.post('/search',search);
module.exports = route;