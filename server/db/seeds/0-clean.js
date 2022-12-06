exports.seed = async (knex) => {
  await knex('books').del()
  await knex('comments').del()
  await knex('profiles').del()
}
