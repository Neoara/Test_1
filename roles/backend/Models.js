const schemas = require('./Schemas');
const mongoose = require("mongoose");

const User = new mongoose.model("User", schemas.UserSchema);
const Post = new mongoose.model("Post", schemas.PostSchema);

module.exports = {
    User,
    Post
};