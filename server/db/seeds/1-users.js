exports.seed = async (knex) => {
  await knex('users').insert([
    { auth0_id: '1', name: 'Food' },
    { auth0_id: '2', name: 'Match' },
    { auth0_id: '3', name: 'Maker' },
  ])
}
