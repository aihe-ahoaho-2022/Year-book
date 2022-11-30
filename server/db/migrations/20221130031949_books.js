exports.up = function (knex) {
  return knex.schema.createTable('books', (table) => {
    table.increments('id')
    table.string('name')
    table.string('image')
    table.string('theme')
    table.string('auth0_id')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('books')
}
