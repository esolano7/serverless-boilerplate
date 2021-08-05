'use strict'
const STATUS_CODES = require('../util/GTI_STATUS_CODES')

async function validateHeaders(req, res, next) {
  const contentType = req.headers['content-type']

  if (contentType && contentType.toLowerCase() === 'application/json') {
    next()
  } else {
    return res.status(400).send(STATUS_CODES.BAD_REQUEST_PARAMS)
  }
}

module.exports = {
  validateHeaders
}
