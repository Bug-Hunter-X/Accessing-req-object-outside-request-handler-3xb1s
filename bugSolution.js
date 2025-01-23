const express = require('express');
const app = express();
const port = 3000;

function myFunction(method){
    console.log(method);
}

app.get('/', (req, res) => {
  myFunction(req.method);
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});