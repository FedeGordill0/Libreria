import React from "react";

const BookList = ({ books, setlistUpdated, book, setBook }) => {
  //DELETE
  const handleDelete = (id) => {
    const requestInit = {
      method: "DELETE",
    };
    fetch("http://localhost:9000/api/" + id, requestInit)
      .then((res) => res.text())
      .then((res) => console.log(res));

    setlistUpdated(true);
  };

  //PUT
  let { titulo, autor, edicion } = book;
  const handleUpdate = (id) => {
    if (titulo === "" || autor === "" || edicion <= 0) {
      alert("Todos los campos son obligatorios");
      return;
    } else {
      const requestInit = {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(book),
      };
      fetch("http://localhost:9000/api/" + id, requestInit)
        .then((res) => res.text())
        .then((res) => console.log(res));

      setBook({
        titulo: "",
        autor: "",
        edicion: 0,
      });

      setlistUpdated(true);
    }
  };
  return (
    <table className="table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Título</th>
          <th>Autor</th>
          <th>Edición</th>
        </tr>
      </thead>

      <tbody>
        {books.map((book) => (
          <tr key={book.id}>
            <td>{book.id}</td>
            <td>{book.titulo}</td>
            <td>{book.autor}</td>
            <td>{book.edicion}</td>
            <td>
              <div className="mb-3">
                <button
                  onClick={() => handleDelete(book.id)}
                  className="btn btn-danger"
                >
                  Eliminar
                </button>
              </div>
              <div className="mb-3">
                <button
                  onClick={() => handleUpdate(book.id)}
                  className="btn btn-dark"
                >
                  Actualizar
                </button>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
export default BookList;
