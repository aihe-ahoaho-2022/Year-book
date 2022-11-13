// initialState to be an empty array upon "Final" ticket completion
const initialState = [
  {
    id: 1,
    uploaderId: '1',
    name: 'Bag Cat',
    description: 'Likes bags',
    imageUrl: '/images/bag-cat.jpg',
    disposition: 'friend'
  }
]

const final = (state = initialState, action) => {
  const { type } = action

  switch (type) {
    default:
      return state
  }
}

export default final
