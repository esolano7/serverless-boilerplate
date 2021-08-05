'use strict'
const express = require('express')
const controller = require('../controllers')
const { cors } = require('../middleware/general')

const router = express.Router()

router.get('/', cors, controller.healthCheck)
router.get('/healthcheck', cors, controller.healthCheck)

// This endpoint must be the last one
router.use(controller.notFound)
module.exports = router
