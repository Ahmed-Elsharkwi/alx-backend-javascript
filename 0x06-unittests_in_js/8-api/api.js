const express = require('express')
const app = express()

// respond with "hello world" when a GET request is made to the homepage
const port = 7865;
app.listen(port, () => {
  console.log(`App available on localhost port ${port}`);
});

app.get('/', (req, res) => {
   res.send('Welcome to the payment system');
})
