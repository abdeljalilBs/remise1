const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const app = express();
const Port = process.env.PORT || 3000;
app.get('/api', (req, res) => {
  res.json({ message: 'Hello from the backend!' });
});

app.listen(Port, () => {
  console.log(`Server is running on port ${Port}`);
});