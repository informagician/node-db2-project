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

const port = 4001;
server.listen(port, () => console.log('\n*** Server is on Port 4001 ***\n'))