function cors(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')

  var reqHeaders = req.get('Access-Control-Request-Headers')
  if (reqHeaders) res.header('Access-Control-Allow-Headers', reqHeaders)

  var reqMethods = req.get('Access-Control-Request-Methods')
  if (reqMethods) res.header('Access-Control-Allow-Methods', reqMethods)

  next()
}

module.exports = {
  cors
}
