const {Book} = require('../models/book.model.js')

const handleBookStoreController = async (req, res) => {
    try {
        const body = req.body;

        if(!body.BookName || 
            !body.BookTitle||
            !body.Author||
            !body.SellingPrice
        ){
            return res
            .status(400)
            .json({Message: "All fields are required", Success: false});

        }

        const bookAdd = await Book.insertOne(body);

        console.log("bookAdd", bookAdd);

    } catch (error) {
        return res
        .status(500)
        .json({Message: error.message,
             Success: true,
              Id:bookAdd?.id});
    }
}


const handleBookListController = async (req, res) => {

    try {
        const bookList = await Book.find({});
        return res
        .status(200)
        .json({Message: "All Books fetched successfully", Success: true, TotalCount: bookList?.length, BookList: bookList});

}catch (error) {
    return res
    .status(5400)
    .json({Message: error.message, Success: false});
}
}

const handleBookDeleteController = async (req, res) => {
    try {
        const {id} = req.params;
        const bookDelete = await Book.findByIdAndDelete(id);
        return res
        .status(200)
        .json({Message: "Book deleted successfully", Success: true});
    } catch (error) {
        return res
        .status(500)
        .json({Message: error.message, Success: false});
    }
}

const handleBookUpdateController = async (req, res) => {
    try {
        const {id} = req.params;
        const body = req.body;

        const bookUpdate = await Book.findByIdAndUpdate(id, body, { new: true });
        return res
        .status(200)
        .json({Message: "Book updated successfully", Success: true, Book: bookUpdate});
    } catch (error) {
        return res
        .status(500)
        .json({Message: error.message, Success: false});
    }
}

module.exports = {handleBookStoreController, handleBookListController, handleBookDeleteController, handleBookUpdateController}