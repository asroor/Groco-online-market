const path = require('path');
const fs = require('fs');

// All Posts Database
const getAllPosts = () => {
    const posts = JSON.parse(fs.readFileSync(path.join(__dirname, 'db.json'), 'utf8'));
    return posts
};
// Add post to database
const addPost = async (post) => {
    const posts = JSON.parse(fs.readFileSync(path.join(__dirname, 'db.json'), 'utf8'));
    posts.push(post);
    fs.readFileSync(path.join(__dirname, 'db.json'), JSON.stringify(posts), 'utf8', (err) => {
        if (err) throw err;
    });
}
module.exports = {
    getAllPosts,
    addPost
}