exports.seed = async (knex) => {
  await knex('results').insert([
    { auth0_id: 1, animal_id: 1, created: new Date(Date.now()), disposition: 'friend' },
    { auth0_id: 1, animal_id: 2, created: new Date(Date.now()), disposition: 'foe'  },
    { auth0_id: 1, animal_id: 3, created: new Date(Date.now()), disposition: 'friend'  },
    { auth0_id: 2, animal_id: 2, created: new Date(Date.now()), disposition: 'friend'  },
    { auth0_id: 2, animal_id: 3, created: new Date(Date.now()), disposition: 'foe'  },
    { auth0_id: 3, animal_id: 3, created: new Date(Date.now()), disposition: 'friend'  },
  ])
}
