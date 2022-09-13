import nock from 'nock'
import { getHomeContent } from '../home'

const homeContentMockData = {
  captionId: 2,
  captionText: 'mockCaptionText',
  imageId: 2,
  imageUrl: 'mockImageUrl',
}

describe('GET /api/v1/home', () => {
  it('gets the home page content', async () => {
    expect.assertions(1)
    const scope = nock('http://localhost')
      .get('/api/v1/home')
      .reply(200, homeContentMockData)

    const homeContent = await getHomeContent()
    expect(homeContent).toEqual(homeContentMockData)
    scope.done()
  })
})
