const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const app = express();
const port = 3000;

mongoose.connect('mongodb://localhost:27017/learnexpress', {
})
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((err) => {
        console.error('Failed to connect to MongoDB', err);
    });

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.get('/post/:id', (req, res) => {
    const postId = req.params.id;
    res.send(`Post ID: ${postId}`);
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});