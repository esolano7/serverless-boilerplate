'use strict'
const serverless = require('serverless-http')
const express = require('express')
const router = require('./routes')
const http = require('http')

const app = express()
const server = http.createServer(app)

app.use('/', router)

module.exports = {
  handler: serverless(app),
  server: { app, server }
}
