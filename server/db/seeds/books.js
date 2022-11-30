exports.seed = async function (knex) {
  await knex('books').insert([
    {
      id: 1,
      name: 'EDA Aihe Ahoaho 2022',
      image: 'test-image.jpg',
      theme: 'red',
      auth0_id: 'authtestid1',
    },
    {
      id: 2,
      name: 'EDA Aihe Popoto 2022',
      image: 'test-image.jpg',
      theme: 'blue',
      auth0_id: 'authtestid2',
    },
    {
      id: 3,
      name: 'Dog Agility Class 22',
      image: 'test-image.jpg',
      theme: 'green',
      auth0_id: 'authtestid3',
    },
    {
      id: 4,
      name: 'Dogwarts Academy',
      image: 'test-image.jpg',
      theme: 'purple',
      auth0_id: 'authtestid4',
    },
  ])
}
