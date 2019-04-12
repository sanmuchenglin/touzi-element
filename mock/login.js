
const getRandom = () => (
  Math.random().toString(36).substr(2).toLocaleUpperCase()
)
  

module.exports = {
  'POST /api/logout'(req, res) {
    res.status(200).json({code: 0})
  },
  
  'POST /api/login'(req, res) {
    let random = getRandom()
    res.status(200).json(random)
  }
}