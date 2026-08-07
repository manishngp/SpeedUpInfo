const mongoose = require('mongoose');

async function connectdb() {
    await mongoose.connect("mongodb+srv://manishngpdoc_db_user:uJM7KZehfog5bR9W@learningcluster.8j0iodq.mongodb.net/notesdb")
    console.log("database connected successfully");
}

module.exports = connectdb