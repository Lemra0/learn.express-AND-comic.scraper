const express = require('express');
const fs = require('fs');
const path = require('path');
const router = express.Router();

const dataFilePath = path.join(__dirname, '../data.json');

router.get('/post/:id', (req, res) => {
    const postId = req.params.id;

    fs.readFile(dataFilePath, 'utf8', (err, data) => {
        if (err) {
            return res.status(500).send('Error reading data');
        }

        const posts = JSON.parse(data);
        const post = posts.find(p => p.id === postId);

        if (post) {
            res.render('singlePost', { post });
        } else {
            res.status(404).send('Post not found');
        }
    });
});

module.exports = router;