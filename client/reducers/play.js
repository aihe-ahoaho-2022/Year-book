// initialState to be an empty array upon "Play" ticket completion
const initialState = [
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
]

const play = (state = initialState, action) => {
  const { type } = action

  switch (type) {
    default:
      return state
  }
}

export default play
