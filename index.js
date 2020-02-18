const express = require('express');
const knex = require('knex')
const db = knex(require('./knexfile').development);
const server = express();

server.use(express.json());

server.get('/', (req,res) => {
    res.status(200).json({message: 'server is working'})
})

server.get('/api/cars', (req,res) => {
    db
    .select('*')
    .from('cars')
    .then(cars => {
        res.status(200).json(cars)
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({errorMessage: 'something went wrong fetching cars'})
    })
})

server.post('/api/cars', (req,res) => {
    db('cars')
    .insert(req.body, 'id')
    .then(id => {
        res.status(201).json(id)
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({errorMessage: 'something went wrong inserting cars'})
    })
})

server.put('/api/cars/:id' , (req,res) => {
    const id = req.params.id
    const changes = req.body
    db('cars')
    .where({id})
    .update(changes)
    .then(count => {
        res.status(200).json(count)
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({errorMessage: 'something went wrong updating cars'})
    })
})

server.delete('/api/cars/:id', (req,res) =>{
    const id = req.params.id
    db('cars')
    .where({id})
    .delete()
    .then(count => {
        res.status(200).json(count)
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({errorMessage: 'something went wrong deleting cars'})
    })
})

const port = 4001;
server.listen(port, () => console.log('\n*** Server is on Port 4001 ***\n'))