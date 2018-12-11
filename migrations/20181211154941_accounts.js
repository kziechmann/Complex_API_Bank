'use strict'

exports.up = function(knex) {
  return knex.schema.createTable('accounts', (table) => {
    table.bigIncrements().notNullable().primary()
    table.string('name').notNullable().required()
    table.string('bankName').notNullable().required()
    table.text('description').notNullable().defaultTo('').required()
    table.json('transactions').notNullable()
    table.timestamps(true,true).notNullable()
  })
}

exports.down = function(knex) {
  return knex.schema.dropTable('accounts')
}
