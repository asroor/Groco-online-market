const path = require('path');
const fs = require('fs');

// All Posts Database
const getAllPosts = () => {
    const posts = JSON.parse(fs.readFileSync(path.join(__dirname, 'db.json'), 'utf8'));
    return posts
};
// Add post to database
const addPost = (post) => {
    const posts = JSON.parse(fs.readFileSync(path.join(__dirname, 'db.json'), 'utf8'));
    posts.push(JSON.stringify(post));
    return posts
}
module.exports = {
    getAllPosts
}