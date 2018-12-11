'use strict'

exports.up = function(knex) {
  return knex.schema.createTable('accounts', (table) => {
    table.uuid().notNullable().primary()
    table.string('title').notNullable().required()
    table.integer('amount').notNullable().required()
    table.boolean('pending').notNullable().defaultTo(true).required()
    table.timestamps(true,true).notNullable()
  })
}

exports.down = function(knex) {
  return knex.schema.dropTable('accounts')
}
