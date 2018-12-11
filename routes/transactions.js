var express = require('express')
var router = express.Router()
var knex = require('../knex')

// Get All
router.get('/', function(req, res, next) {
  knex('transactions')
    .then((data) => {
      res.status(200).json(data)
    })
})

// Get One
router.get('/:id', function(req, res, next) {
  knex('transactions')
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
  knex('transactions')
    .insert(
      id: req.params.id,
      title: req.body.title,
      amount: req.body.amount,
      pending: req.body.pending
    },'*')
    .then((data) => {
      res.status(200).json(data)
    })
})

// Patch
router.patch('/:id', function(req, res, next) {
  knex('transactions')
    .where({
      id: req.params.id
    })
    .first()
    .update({
      title: req.body.title,
      amount: req.body.amount,
      pending: req.body.pending
    },'*')
    .then((result)=>{
      res.json(result)
    })
})

// Delete one
router.delete('/:id', function(req, res, next) {
  knex('transactions')
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
