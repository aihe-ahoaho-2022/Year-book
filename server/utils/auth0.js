import jwt from 'express-jwt'
import jwks from 'jwks-rsa'

const domain = 'https://aihe-ahoaho-2022-razel.au.auth0.com'
const audience = 'https://ambatsador/api'

export const checkJwt = jwt({
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
