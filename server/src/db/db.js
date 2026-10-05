const mongoose = require("mongoose");

const database = async () => {
    
       try {
        await mongoose.connect("mongodb+srv://bookstore:bookstore123@cluster0.1cy0hps.mongodb.net/bookstore").then(() => {
        console.log("Database connected successfully");
        })
       }
        catch (error) {
        console.log("error",error)
       }
    }

module.exports = database