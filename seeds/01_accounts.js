'use strict'

exports.seed = (knex) => {
  // Deletes ALL existing entries
  return knex('accounts').del()
    .then(() => {
      // Inserts seed entries
      return knex('accounts').insert([{
        id: 1,
        property1: 'Donny',
        textfield1: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.',
        created_at: new Date('2016-06-26 14:26:16 UTC'),
        updated_at: new Date('2016-06-26 14:26:16 UTC')
      },
      {
        id: 2,
        property1: 'Johnny',
        textfield1: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.',
        created_at: new Date('2016-06-26 14:26:16 UTC'),
        updated_at: new Date('2016-06-26 14:26:16 UTC')
      }
      ]);
    })
    .then(() => {
      return knex.raw("SELECT setval('accounts_id_seq', (SELECT MAX(id) FROM accounts))")
    });
};
