exports.up = function (knex) {
  return knex.schema.createTable('animals', (table) => {
    table.increments('id')
    table.string('auth0_id')
    table.string('name')
    table.string('description')
    table.string('image_url')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('animals')
}
