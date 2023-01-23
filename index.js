const express = require('express')
const app = express()

app.get('/api/users', (req, res) => {
  res.json([{ name: 'John Doe' }, { name: 'Jane Doe' }])
})

app.listen(3000, () => {
  console.log('API server started on port 3000')
})
