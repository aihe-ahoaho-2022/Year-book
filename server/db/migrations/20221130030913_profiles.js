exports.up = function (knex) {
  return knex.schema.createTable('profiles', (table) => {
    table.increments('id')
    table.integer('book_id')
    table.string('name')
    table.string('image')
    table.string('auth0_id')
    table.string('quote')
    table.string('blurb')
    table.string('linkedin_url')
    table.string('twitter_url')
    table.string('instagram_url')
    table.string('facebook_url')
    table.string('github_url')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('profiles')
}
