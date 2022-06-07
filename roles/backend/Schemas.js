const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    fullName: String,
    login: String,
    password: String,
    roleId: Number
});

const PostSchema = new Schema({
    title: String,
    content: String,
    author: UserSchema,
    createdAt: Date
});

module.exports = {
    UserSchema,
    PostSchema
};