
const express = require('express');

const router = express.Router(); //Router devolverá un Objeto en donde podrá almacenar Rutas

const Task = require('../models/Task');

//Creando un ruta a través del metodo GET y a la dirección '/' Responderá lo que se almacene
router.get('/', async (req, res) => {
    const tasks = await Task.find();
    console.log(tasks);
    res.json(tasks); 
    // res.json('received'); 
    // res.json({
    //     status: 'API WORKS'
    // });
});

router.get('/:id', async (req, res) => {
    const task = await Task.findById(req.params.id);
    res.json(task);
})

router.post('/', async(req, res) =>{
    const { title, description } = req.body;
    const task = new Task({
        title,
        description
    })
    task.save();
    res.json({status: 'Task Saved'})
    // res.json('received');
    // console.log(task);
    // console.log(req.body);
});

router.put('/:id', async (req, res) => {
    const { title, description } = req.body;
    const newTask = { title, description };
    console.log(req.params.id);
    console.log('received');
    await Task.findByIdAndUpdate(req.params.id, newTask);
    res.json({status: 'Task Updated'});
});

router.delete('/:id', async (req, res) => {
    await Task.findByIdAndDelete(req.params.id);
    res.json({status: 'Task Deleted'});
});

module.exports = router;
 
/*
REST API
Direcciones de internet donde React podrá hacer peticiones y obtener/modificar/eliminar datos
*/