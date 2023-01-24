const express = require('express')
const bodyParser = require('body-parser');
const app = express()

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.post('/api/users', (req, res) => {
    console.log(req.body);
    if (req.body.name === "John") {
        res.json([{ name: 'John Doe' }])
    }
    res.json([{ name: 'Jane Doe' }])
})

app.listen(3000, () => {
  console.log('API server started on port 3000')
})