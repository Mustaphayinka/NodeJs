const express = require('express');
const router = express.Router();
const Post = require('../models/Post');


// This code gets all posts from the database
router.get('/', async (req, res) => {
    try{
        const posts  = await Post.find();
        res.json(posts);
    } catch(err){
        res.json({message : err});
    }
});

// This code posts data to the database
router.post('/', async (req, res) => {
    const post = new Post({
        title : req.body.title,
        description : req.body.description
    });
    try{
    const savedPost = await post.save();
    res.json(savedPost);
    }catch (err) {
        res.json({message : err});
    }
})

// This code gets a specific post from the database
router.get('/:postId', async(req, res) => {
    try{
        const post = await Post.findById(req.params.postId);
        res.json(post);
    }catch(err){
        res.json({message : err});
    }
})

// This code deletes post from the database

router.delete('/:postId', async (req, res) => {
    try{
    const removedPost = await Post.remove({_id : req.params.postId});
    res.json(removedPost)
    } catch (err) {
      res.json({message : err});
    }
})

// This code updates a post from the database
router.patch('/:postId', async (req, res) => {
    try{
        const updatedPost = await Post.updateOne(
        {_id : req.params.postId},
        { $set: {title: req.body.title}}
        );
            res.json(updatedPost);
    } catch (err){
        res.json({message : err});
    }
    })

module.exports = router;