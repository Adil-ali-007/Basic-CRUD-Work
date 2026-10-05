const express = require('express')
const {handleBookStoreController,handleBookUpdateController,handleBookListController,handleBookDeleteController}  = require("../controllers/book.controller.js")

const router = express.Router();


router.post("/addbook",handleBookStoreController);
router.get("/booklists",handleBookListController)
router.delete("/deletebook/:id",handleBookDeleteController)
router.put("/updatebook/:id",handleBookUpdateController)

module.exports = router