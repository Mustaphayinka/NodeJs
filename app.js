const express = require('express');
const app = express();
const mongoose = require('mongoose');

const bodyParser = require('body-parser');
app.use(bodyParser.json());

// import routes
const postRoutes = require('./routes/posts');
app.use('/posts', postRoutes);

require('dotenv/config');

// This code connects to mongodb database
mongoose.connect(process.env.DB_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, (err, client) => {
    if (err) {
        return console.log(err);
    }

    console.log('MongoDB Connected');
});



// start listening to a server
app.listen(3000, () => {
    console.log("Listening to server at port 3000")
});