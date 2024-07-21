import express from 'express';

const PORT = 3000;

const app = express();

app.get('/', (req, res) => {
  res.send('GraphQL is amazing!');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});