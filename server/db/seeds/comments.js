exports.seed = async (knex) => {
  await knex('comments').insert([
    {
      id: 1,
      book_id: 1,
      comment: 'Nice!',
      auth0_id: 'authtestid1',
    },
    {
      id: 2,
      book_id: 1,
      comment: 'Awesome!',
      auth0_id: 'authtestid2',
    },
    {
      id: 3,
      book_id: 1,
      comment: 'Kinda sucks',
      auth0_id: 'authtestid3',
    },
    {
      id: 4,
      book_id: 1,
      comment: 'Sup',
      auth0_id: 'authtestid4',
    },
    {
      id: 5,
      book_id: 2,
      comment: 'Nice!',
      auth0_id: 'authtestid1',
    },
    {
      id: 6,
      book_id: 3,
      comment: 'Awesome!',
      auth0_id: 'authtestid2',
    },
    {
      id: 7,
      book_id: 3,
      comment: 'Kinda sucks',
      auth0_id: 'authtestid3',
    },
    {
      id: 8,
      book_id: 4,
      comment: 'Sup',
      auth0_id: 'authtestid4',
    },
  ])
}
