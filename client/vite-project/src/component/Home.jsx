import React, { useState, useEffect } from 'react';
import bookBaseurl from '../../axiosInstance.js';

const Home = () => {

  // =========================
  // Book Form
  // =========================
  const [bookForm, setBookForm] = useState({
    BookName: "",
    BookTitle: "",
    Author: "",
    SellingPrice: "",
    PublishDate: ""
  });

  // =========================
  // Book List
  // =========================
  const [bookList, setBookList] = useState([]);

  // =========================
  // Update Mode
  // =========================
  const [isUpdate, setIsUpdate] = useState(false);

  // Selected book ID for update
  const [updateBookId, setUpdateBookId] = useState(null);


  // =========================
  // Get All Books
  // =========================
  const getAllbookList = async () => {
    try {
      const { data } = await bookBaseurl.get('/booklists');

      setBookList(data?.BookList || []);

    } catch (error) {
      console.log(error);
    }
  };


  // =========================
  // Get Books on Page Load
  // =========================
  useEffect(() => {
    getAllbookList();
  }, []);


  // =========================
  // Handle Form Change
  // =========================
  const handleFormChange = (e) => {

    const { name, value } = e.target;

    setBookForm((prev) => ({
      ...prev,
      [name]: value
    }));
  };


  // =========================
  // Create / Update Book
  // =========================
  const handleSubmit = async () => {

    try {

      // Validation
      if (
        !bookForm.BookName ||
        !bookForm.BookTitle ||
        !bookForm.Author ||
        !bookForm.SellingPrice ||
        !bookForm.PublishDate
      ) {
        alert("Please fill all the fields");
        return;
      }


      // =========================
      // UPDATE
      // =========================
      if (isUpdate) {

        const { data } = await bookBaseurl.put(
          `/updatebook/${updateBookId}`,
          bookForm
        );

        console.log("Book Updated:", data);

        alert("Book updated successfully");

        setIsUpdate(false);
        setUpdateBookId(null);

      }

      // =========================
      // CREATE
      // =========================
      else {

        const { data } = await bookBaseurl.post(
          '/addbook',
          bookForm
        );

        console.log("Book Added:", data);

        alert("Book added successfully");
      }


      // Refresh book list
      getAllbookList();


      // Clear form
      setBookForm({
        BookName: "",
        BookTitle: "",
        Author: "",
        SellingPrice: "",
        PublishDate: ""
      });

    } catch (error) {

      console.log(error);

    }
  };


  // =========================
  // Edit Book
  // =========================
  const handleUpdate = (book) => {

    // Fill form with existing data
    setBookForm({
      BookName: book?.BookName || "",
      BookTitle: book?.BookTitle || "",
      Author: book?.Author || "",
      SellingPrice: book?.SellingPrice || "",
      PublishDate: book?.PublishDate || ""
    });

    // Save selected book ID
    setUpdateBookId(book?._id);

    // Enable update mode
    setIsUpdate(true);
  };


  // =========================
  // Delete Book
  // =========================
  const handleDeleteBook = async (id) => {

    try {

      const { data } = await bookBaseurl.delete(
        `/deletebook/${id}`
      );

      console.log(data);

      // Refresh list
      getAllbookList();

    } catch (error) {

      console.log(error);

    }
  };


  // =========================
  // Cancel Update
  // =========================
  const handleCancelUpdate = () => {

    setIsUpdate(false);

    setUpdateBookId(null);

    setBookForm({
      BookName: "",
      BookTitle: "",
      Author: "",
      SellingPrice: "",
      PublishDate: ""
    });
  };


  return (
    <div className="w-full px-5 min-h-[calc(100vh-60px)]">

      {/* =========================
          FORM
      ========================= */}

      <div className="w-full grid grid-cols-5 gap-4">

        {/* Book Name */}
        <div>
          <label htmlFor="BookName">
            Book Name
          </label>

          <input
            type="text"
            placeholder="Book Name"
            name="BookName"
            value={bookForm.BookName}
            onChange={handleFormChange}
            className="w-full border border-gray-300 rounded-sm outline-1 outline-gray-500 h-8 px-2"
          />
        </div>


        {/* Book Title */}
        <div>
          <label htmlFor="BookTitle">
            Book Title
          </label>

          <input
            type="text"
            placeholder="Book Title"
            name="BookTitle"
            value={bookForm.BookTitle}
            onChange={handleFormChange}
            className="w-full border border-gray-300 rounded-sm outline-1 outline-gray-500 h-8 px-2"
          />
        </div>


        {/* Author */}
        <div>
          <label htmlFor="Author">
            Book Author
          </label>

          <input
            type="text"
            placeholder="Book Author"
            name="Author"
            value={bookForm.Author}
            onChange={handleFormChange}
            className="w-full border border-gray-300 rounded-sm outline-1 outline-gray-500 h-8 px-2"
          />
        </div>


        {/* Selling Price */}
        <div>
          <label htmlFor="SellingPrice">
            Selling Price
          </label>

          <input
            type="text"
            placeholder="Selling Price"
            name="SellingPrice"
            value={bookForm.SellingPrice}
            onChange={handleFormChange}
            className="w-full border border-gray-300 rounded-sm outline-1 outline-gray-500 h-8 px-2"
          />
        </div>


        {/* Publish Date */}
        <div>
          <label htmlFor="PublishDate">
            Book Publish Date
          </label>

          <input
            type="date"
            name="PublishDate"
            value={bookForm.PublishDate}
            onChange={handleFormChange}
            className="w-full border border-gray-300 rounded-sm outline-1 outline-gray-500 h-8 px-2"
          />
        </div>

      </div>


      {/* =========================
          FORM BUTTONS
      ========================= */}

      <div className="w-full flex justify-end gap-2 mt-4">

        {isUpdate && (
          <button
            onClick={handleCancelUpdate}
            className="bg-gray-400 text-white h-9 px-5 rounded-md cursor-pointer"
          >
            CANCEL
          </button>
        )}

        <button
          className="bg-gray-700 text-white h-9 px-5 rounded-md cursor-pointer"
          onClick={handleSubmit}
        >
          {isUpdate ? "UPDATE" : "SUBMIT"}
        </button>

      </div>


      {/* =========================
          BOOK TABLE
      ========================= */}

      <div className="w-full mt-10">

        <table className="w-full bg-white divide-y divide-gray-200">

          <thead className="bg-gray-50">

            <tr>

              <th className="tracking-wider px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                Book Name
              </th>

              <th className="tracking-wider px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                Book Title
              </th>

              <th className="tracking-wider px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                Author
              </th>

              <th className="tracking-wider px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                Selling Price
              </th>

              <th className="tracking-wider px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                Publish Date
              </th>

              <th className="tracking-wider px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                Action
              </th>

            </tr>

          </thead>


          <tbody className="bg-white divide-y divide-gray-200">

            {bookList?.map((book) => (

              <tr
                key={book._id}
                className="hover:bg-gray-200"
              >

                <td className="px-6 py-3 whitespace-nowrap">
                  {book?.BookName}
                </td>

                <td className="px-6 py-3 whitespace-nowrap">
                  {book?.BookTitle}
                </td>

                <td className="px-6 py-3 whitespace-nowrap">
                  {book?.Author}
                </td>

                <td className="px-6 py-3 whitespace-nowrap">
                  {book?.SellingPrice}
                </td>

                <td className="px-6 py-3 whitespace-nowrap">
                  {book?.PublishDate}
                </td>

                <td className="px-6 py-3 whitespace-nowrap">

                  {/* EDIT */}
                  <button
                    onClick={() => handleUpdate(book)}
                    className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer"
                  >
                    Edit
                  </button>


                  {/* DELETE */}
                  <button
                    onClick={() => handleDeleteBook(book._id)}
                    className="bg-red-500 text-white px-4 py-2 rounded-md cursor-pointer ml-2"
                  >
                    Delete
                  </button>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
};

export default Home;