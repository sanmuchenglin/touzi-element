const db = require('./menu')

module.exports = {
  'POST /api/menus'(req, res) {
    res.status(200).json(db)
  }
}