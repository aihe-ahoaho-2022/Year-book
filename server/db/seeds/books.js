exports.seed = async function (knex) {
  await knex('books').insert([
    {
      id: 1,
      name: 'EDA Aihe Ahoaho 2022',
      image: '/images/ahoaho-book.png',
      theme: 'red',
      auth0_id: 'authtestid1',
    },
    {
      id: 2,
      name: 'EDA Aihe Popoto 2022',
      image: '/images/popoto-book.png',
      theme: 'blue',
      auth0_id: 'authtestid2',
    },
    {
      id: 3,
      name: 'Adventure Academy 2020',
      image: '/images/adventure-book.png',
      theme: 'green',
      auth0_id: 'authtestid3',
    },
    {
      id: 4,
      name: 'Dogwarts University 2021',
      image: '/images/dog-warts-book.png',
      theme: 'purple',
      auth0_id: 'authtestid4',
    },
  ])
}
