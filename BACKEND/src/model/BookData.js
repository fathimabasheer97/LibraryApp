const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/LibraryData");
const Schema = mongoose.Schema;

var BookSchema = new Schema({
    bookName: String,
    authorsName: String,
    imageURL: String
});

var Bookdata = mongoose.model('books', BookSchema);
module.exports = Bookdata;