'use strict'
const logger = require('../logger/index')
const STATUS_CODES = require('../util/STATUS_CODES')
const HTTP_STATUS_CODES = require('http').STATUS_CODES

async function healthCheck(req, res) {
  logger.create(
    logger.LEVELS.INFO,
    '200',
    'HealthCheck endpoint succesfully processed', 
    STATUS_CODES.OK,
    req.user,
    req.body
  )
  res.status(200).json({
    message: 'Woot It Login Api'
  })
}

async function notFound(req, res) {
  if (!req.route) {
    logger.create(
      logger.LEVELS.INFO,
      '200',
      `A not found endpoint was requested: ${req.originalUrl}`, 
      STATUS_CODES.OK,
      req.user ? req.user : null,
      req.body
    )
    res.status(404).json({
      error: 'Not Found',
    })
  }
}

module.exports = {
  healthCheck,
  notFound
}
