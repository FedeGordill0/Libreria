import React, { Fragment, useState, useEffect } from "react";
import Navbar from "./Components/Navbar";
import BookList from "./Components/BookList";
import Form from "./Components/Form";
function App() {
  const [book, setBook] = useState({
    titulo: "",
    autor: "",
    edicion: 0,
  });

  const [listUpdated, setlistUpdated] = useState(false);

  const [books, setBooks] = useState([]);

  useEffect(() => {
    const getBooks = () => {
      fetch("http://localhost:9000/api")
        .then((res) => res.json())
        .then((res) => setBooks(res));
    };
    getBooks();

    setlistUpdated(false);
  }, [listUpdated]);

  return (
    <>
      <Navbar brand="Librería"></Navbar>
      <div className="container">
        <div className="row">
          <div className="col-7">
            <h2 style={{ textAlign: "center" }}>Listado de Libros</h2>
            <BookList
              books={books}
              setlistUpdated={setlistUpdated}
              book={book}
              setBook={setBook}
            ></BookList>
          </div>

          <div className="col-5">
            <h2 style={{ textAlign: "center" }}>Registrar Libro</h2>
            <Form book={book} setBook={setBook} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
