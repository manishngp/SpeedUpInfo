const mongoose = require('mongoose');

async function connectdb(){
  
        await mongoose.connect("mongodb+srv://manishngpdoc_db_user:uJM7KZehfog5bR9W@learningcluster.8j0iodq.mongodb.net/notes")
          console.log("db is connected");
   
          
 
}

module.exports = connectdb