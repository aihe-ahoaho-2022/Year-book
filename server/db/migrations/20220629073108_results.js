exports.up = function (knex) {
  return knex.schema.createTable('results', (table) => {
    table.increments('id')
    table.string('auth0_id')
    table.integer('animal_id').references('animals.id')
    table.date('created')
    table.string('disposition')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('results')
}
