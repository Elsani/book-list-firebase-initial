import Book from "../components/Book.jsx";
import Header from "../components/Header.jsx";
import { useSelector } from "react-redux";
import { selectBooks } from "../store/booksSlice.js";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../firebase/config.js";
import { useEffect, useState } from "react";
import { selectUsers } from "../store/usersSlice.js";

function BooksPage() {
  const uid = useSelector(selectUsers).currentUser.id;
  console.log(uid);
  const [books, setBooks] = useState([]);
  // const books = useSelector(selectBooks);
  const pageTitle = "📖 Book List with Router, Redux & Firebase";

  useEffect(() => {
    const fetchBooks = async () => {
      // const q = query (collection(db, 'books'), where ("capital", "==", true));
      const q = query(collection(db, "books"), where("user_id", "==", uid));
      let bookList = [];
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        bookList.push({ id: doc.id, ...doc.data() });
      });
      setBooks(bookList);
    };

    fetchBooks();
  }, []);

  return (
    <>
      <div className="container">
        <Header pageTitle={pageTitle} />
        <div className="books-container">
          <div className="books-list">
            {books.map((book) => (
              <Book key={book.id} book={book} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default BooksPage;
