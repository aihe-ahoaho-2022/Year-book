const request = require('supertest')
const server = require('../../server')

const { getProfileById } = require('../../db/db.js')



jest.spyOn(console, 'error')
jest.mock('../../db/db.js')
const fakeSingle = (req,res,next)=>{
  req.file = { path:"nothing" }
  next()
}
jest.mock('../multer', ()=>({

  upload:{single:jest.fn().mockReturnValue(fakeSingle)}

}))

afterEach(() => {
  console.error.mockReset()
})

const getProfileByIdData = {
  id: 1,
  book_id: 1,
  name: 'Gerard',
  image: 'https://www.pianz.org.nz/wp-content/uploads/2016/03/pekin-duck.jpg',
  auth0_id: 'authtestid1',
  quote: 'Everything sucks',
  blurb: 'Gerard is great and likes pineapples.',
  linkedin_url: '',
  twitter_url: '',
  instagram_url: '',
  facebook_url: '',
  github_url: 'https://github.com/gerardpaapu',
}

describe('get /api/v1/profiles/1', () => {
  it('should return status 200 and a joint table when successful', () => {
    expect.assertions(3)
    getProfileById.mockReturnValue(Promise.resolve([getProfileByIdData]))
    return request(server)
      .get('/api/v1/profiles/1')
      .then((res) => {
        expect(res.status).toBe(200)
        expect(res.body.id).toBe(1)
        expect(res.body.blurb).toContain("Gerard")
        
      })
  })
})
describe('post /:profileid/imageupload', () => {
  it('should return status 200 and a joint table when successful', () => {
    expect.assertions(2)
    getProfileById.mockReturnValue(Promise.resolve([getProfileByIdData]))
    return request(server)
      .get('/api/v1/profiles/1/imageupload')
      .send({})
      .then((res) => {
        expect(res.status).toBe(200)
        expect(res.body).toBe('image uploaded')
      })
  })
})



