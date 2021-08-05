'use strict'
const serverless = require('serverless-http')
const express = require('express')
const router = require('./routes')

const app = express()

app.use('/', router)

module.exports = {
  handler: serverless(app),
}
