exports.seed = async (knex) => {
  await knex('results').del()
  await knex('foods').del()
  await knex('users').del()
}
