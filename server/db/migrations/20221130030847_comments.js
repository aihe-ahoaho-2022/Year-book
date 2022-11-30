/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('comments', (table) => {
    table.increments('id')
    table.integer('book_id')
    table.string('comment')
    table.string('auth0_id')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('comments')
}
