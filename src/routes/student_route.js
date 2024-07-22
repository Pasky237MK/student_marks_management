const express = require('express');
const route = express.Router();
const stud_controller = require('./../controller/student_controller');

route.get( '/', stud_controller.getallstudents);

route.post('/', stud_controller.savestudent);

route.put('/student', (req, res) => {
    let student = { name, sex } = req.body;
    
    res.status(201).send({ 'update name' :name, 'update sex' :sex})
});

route.delete('/student/:id', (req, res) => {
    let id = req.params.id;
    
    res.status(200).send(`deleted successfully id ${id}`)
});

module.exports=route