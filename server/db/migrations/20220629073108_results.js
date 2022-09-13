exports.up = function (knex) {
  return knex.schema.createTable('results', (table) => {
    table.string('auth0_id').references('users.auth0_id')
    table.integer('food_id').references('foods.id')
    table.date('created')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('results')
}
