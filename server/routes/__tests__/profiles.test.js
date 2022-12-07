/* eslint-disable jest/no-commented-out-tests */

const request = require('supertest')
const server = require('../../server')

const {
  getProfileById,
  getProfilesByBookId,
  addProfile,
} = require('../../db/db.js')



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
  it('should return status 200 and profiles by bookID when successful', () => {
    expect.assertions(2)
    getProfilesByBookId.mockReturnValue(Promise.resolve(getProfileByIdData))
    return request(server)
      .get('/api/v1/profiles/book/1')
      .then((res) => {
        expect(res.status).toBe(200)
        expect(getProfileByIdData.name).toBe('Gerard')
      })
  })
})

describe('POST /api/v1/profiles', () => {
  it('should return status 200 and an updated table when successful', () => {
    expect.assertions(1)
    addProfile.mockImplementation(() => Promise.resolve(getProfileByIdData))
    return request(server)
      .post('/api/v1/profiles/add')
      .send(getProfileByIdData)
      .then((res) => {
        expect(res.status).toBe(200)
      })
  })
  it('should return status 500 and an error message when database fails.', () => {
    expect.assertions(2)
    addProfile.mockImplementation(() => Promise.reject('Post Failed'))
    return request(server)
      .post('/api/v1/profiles/add')
      .then((res) => {
        expect(res.status).toBe(500)
        expect(res.text).toContain('Something went wrong')
      })
  })
})
// describe('post /:profileid/imageupload', () => {
//   it('should return status 200 and a joint table when successful', () => {
//     expect.assertions(2)
//     getProfileById.mockReturnValue(Promise.resolve([getProfileByIdData]))
//     return request(server)
//       .get('/api/v1/profiles/1/imageupload')
//       .send({})
//       .then((res) => {
//         expect(res.status).toBe(200)
//         expect(res.body).toBe('image uploaded')
//       })
//   })
// })



