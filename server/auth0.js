const jwks = require('jwks-rsa')
const { expressjwt: jwt } = require('express-jwt')

const domain = 'https://ahoaho-2022-yearbook.au.auth0.com'
const audience = 'https://yearbook/api'

const checkJwt = jwt({
  secret: jwks.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: `${domain}/.well-known/jwks.json`,
  }),
  audience: audience,
  issuer: `${domain}/`,
  algorithms: ['RS256'],
})

module.exports = checkJwt
