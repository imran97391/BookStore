const Book = require("../model/Book");


const getAllBooks = async (req, res, next) => {
    let book;
    try {
        book = await Book.find();
    } catch (err) {
        console.log(err)
    }

    if (!book) {
        res.status(404).json({ message: "No book found" })
    } else {
        return res.status(200).json({ book })
    }
}


const addbooks = async (req, res, next) => {
    const { name, author, description, price, avilable, image } = req.body;
    let book;
    
    try {
        book = new Book({
            name,
            author,
            description,
            price,
            avilable,
            image
        })
        await book.save();
    } catch (err){
        console.log(err);
    }


     if (!book) {
        res.status(500).json({ message: "unable to add book" })
    } else {
        return res.status(201).json({ book })
    }
}
exports.getAllBooks = getAllBooks;
exports.addbooks = addbooks;