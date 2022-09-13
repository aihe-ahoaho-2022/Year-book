exports.up = function (knex) {
  return knex.schema.createTable('foods', (table) => {
    table.increments('id')
    table.string('uploader_id').references('users.auth0_id')
    table.string('name')
    table.string('description')
    table.string('image_url')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('foods')
}
