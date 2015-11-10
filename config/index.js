module.exports = {
  'path': {
    'public': './public',
    'favicon': '/images/favicon.ico'
  },
  'prebundle': [],
  'defaults': {
    'MONGO_URL': 'mongodb://localhost:27017/examples',
    'SESSION_SECRET': '61d68c6625d14e9e8767dca140a637b4de423876',
    'SESSION_COOKIE': '00d8f2c61457c9a830b5c758fedce8cde80eb5b3',
    'SERVER_IP': 'localhost',
    'PORT': 3000
  }
};