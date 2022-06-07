const express = require('express');
const models = require('../Models')
const postsRouter = express.Router();

postsRouter.get('/', async (req, res) => {
    const posts = await models.Post.find({});
    res.status(200).send(posts);
});

postsRouter.post('/', async (req, res) => {
    let {title, content, author} = req.body;

    author = JSON.parse(author)
    let currenDate = new Date();
    let day = currenDate.getDate();
    let month = currenDate.getMonth() + 1;
    let year = currenDate.getFullYear();

    let newPost = new models.Post({title, content, author, createdAt: `${day}/${month}/${year}`});

    await newPost.save();

    res.status(201 ).send('post created')
});

module.exports = postsRouter;