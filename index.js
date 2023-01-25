const express = require('express')
const bodyParser = require('body-parser');
const app = express()

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.post('/api/users', (req, res) => {
    console.log(req.body.account);
    if (req.body.account === '1111') {
        res.json({message: '$12,000', found: 'yes'})
    }
    if (req.body.account === 2222) {
      res.json({message: '$834.65', found: 'yes'})
    }
    if (req.body.account === 3333) {
      res.json({message: '$9,329', found: 'yes'})
    }
    if (req.body.acount === 4444) {
      res.json({message: '$208.45', found: 'yes'})
    }
    res.json({ message: `I'm sorry your account number does not match any of our records`, found: 'no'})
})

app.listen(3000, () => {
  console.log('API server started on port 3000')
})