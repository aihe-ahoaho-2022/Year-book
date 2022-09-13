exports.seed = async (knex) => {
  await knex('results').insert([
    { auth0_id: 1, food_id: 1, created: new Date(Date.now()) },
    { auth0_id: 1, food_id: 2, created: new Date(Date.now()) },
    { auth0_id: 1, food_id: 3, created: new Date(Date.now()) },
    { auth0_id: 2, food_id: 2, created: new Date(Date.now()) },
    { auth0_id: 2, food_id: 3, created: new Date(Date.now()) },
    { auth0_id: 3, food_id: 3, created: new Date(Date.now()) },
  ])
}
