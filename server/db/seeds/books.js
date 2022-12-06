exports.seed = async function (knex) {
  await knex('books').insert([
    {
      id: 1,
      name: 'EDA Aihe Ahoaho 2022',
      image:
        'https://media.istockphoto.com/id/1224449402/vector/vintage-school-yearbook-cover-vector-layered.jpg?s=612x612&w=0&k=20&c=NSjbIwYxTWDkrVpCLMLWTHyF283ZO4VbYSk_yJoHGVE=',
      theme: 'red',
      auth0_id: 'authtestid1',
    },
    {
      id: 2,
      name: 'EDA Aihe Popoto 2022',
      image:
        'https://media.istockphoto.com/id/1224449402/vector/vintage-school-yearbook-cover-vector-layered.jpg?s=612x612&w=0&k=20&c=NSjbIwYxTWDkrVpCLMLWTHyF283ZO4VbYSk_yJoHGVE=',
      theme: 'blue',
      auth0_id: 'authtestid2',
    },
    {
      id: 3,
      name: 'Dog Agility Class 22',
      image:
        'https://media.istockphoto.com/id/1224449402/vector/vintage-school-yearbook-cover-vector-layered.jpg?s=612x612&w=0&k=20&c=NSjbIwYxTWDkrVpCLMLWTHyF283ZO4VbYSk_yJoHGVE=',
      theme: 'green',
      auth0_id: 'authtestid3',
    },
    {
      id: 4,
      name: 'Dogwarts Academy',
      image:
        'https://media.istockphoto.com/id/1224449402/vector/vintage-school-yearbook-cover-vector-layered.jpg?s=612x612&w=0&k=20&c=NSjbIwYxTWDkrVpCLMLWTHyF283ZO4VbYSk_yJoHGVE=',
      theme: 'purple',
      auth0_id: 'authtestid4',
    },
  ])
}
