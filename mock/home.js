const Mock = require('mockjs')

module.exports = {
  ['GET /api/menu'](req, res) {
    res.status(200).json({a:1, b:2})
  }
}