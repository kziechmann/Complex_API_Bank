var express = require('express')
var router = express.Router()
var knex = require('../knex')

// Get All
router.get('/', function(req, res, next) {
  knex('accounts')
    .then((data) => {
      res.status(200).json(data)
    })
})

// Get One
router.get('/:id', function(req, res, next) {
  knex('accounts')
    .where({
      id: req.params.id
    })
    .select('*')
    .first()
    .then((result) => {
      res.status(200).json(result)
    })
})

// Post
router.post('/', function(req, res, next) {
  knex('accounts')
    .insert(
      id: req.params.id,
      name: req.body.name,
      bankName: req.body.bankName,
      description: req.body.description,
      transactions: req.body.transactions
    },'*')
    .then((data) => {
      res.status(200).json(data)
    })
})

// Patch
router.patch('/:id', function(req, res, next) {
  knex('accounts')
    .where({
      id: req.params.id
    })
    .first()
    .update({
      name: req.body.name,
      bankName: req.body.bankName,
      description: req.body.description,
      transactions: req.body.transactions
    },'*')
    .then((result)=>{
      res.json(result)
    })
})

// Delete one
router.delete('/:id', function(req, res, next) {
  knex('accounts')
    .where({
      id: req.params.id
    },'*')
    .first()
    .del()
    .then((result)=>{
      result? res.json(result[0]) : res.send('not found!')
    })
})

module.exports = router
