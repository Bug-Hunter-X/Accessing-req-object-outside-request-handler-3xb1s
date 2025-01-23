const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

//This is a simple express server that works fine. However if you try to use a function that needs to access the request object outside of the request handling function it will fail. For example:

function myFunction(req){
    console.log(req.method);
}

myFunction(); //This will throw an error because req is not defined outside of the request handling function.