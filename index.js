const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;
const data = {
  name: 'John Doe',
  age: 30,
  email: 'johndoe@example.com'
};

app.get('/api/data', (req, res) => {
  res.json(data);
});

app.listen(PORT, () => {
  console.log('Server started on port 3000');
});
