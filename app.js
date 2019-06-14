const express = require('express');
const app = express();

const PORT = process.env.PORT || 4001;

app.get('/', (req, res) => {res.send(`<h1>Hello World!</h1>`)});


app.post('/',  (req, res)=> {
	res.send('Got a new POST request')
  });

  app.put('/user', function (req, res) {
	res.send('Got a PUT request at /user')
  });

  app.delete('/user', function (req, res) {
	res.send('Got a DELETE request at /user')
  });

app.listen(PORT,()=>{
	console.log(`Listening on port ${PORT}`);
});
