exports.seed = async (knex) => {
  await knex('foods').insert([
    {
      id: 1,
      uploader_id: '1',
      name: 'Pizza',
      description: 'Delicious margarita pizza',
      image_url: '/images/pizza.jpg',
    },
    {
      id: 2,
      uploader_id: '1',
      name: 'Toast',
      description: 'Perfectly toasted eggy bread',
      image_url: '/images/toast.jpg',
    },
    {
      id: 3,
      uploader_id: '2',
      name: 'Ice Cream',
      description: 'Any flavour of ice cream you can think of',
      image_url:
        'https://www.foodbusinessnews.net/ext/resources/2022/06/27/IceCreamSurvey_Lead.jpg?t=1656349101&width=1080',
    },
    {
      id: 4,
      uploader_id: '3',
      name: 'Apple',
      description: 'Scrumptious and yummy apples',
      image_url:
        'https://images-prod.healthline.com/hlcmsresource/images/AN_images/health-benefits-of-apples-1296x728-feature.jpg',
    },
  ])
}
