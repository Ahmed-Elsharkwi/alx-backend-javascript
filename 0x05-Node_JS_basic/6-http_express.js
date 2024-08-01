const express = require('express')
const app = express()

PORT = 1245
HOST = 'localhost'
// respond with "hello world" when a GET request is made to the homepage
app.get('/', (req, res) => {
  res.send('Hello Holberton School!')
})

app.listen(PORT, HOST, () => {
  process.stdout.write(`Server listening at -> http://${HOST}:${PORT}\n`);
});

module.exports = app;
