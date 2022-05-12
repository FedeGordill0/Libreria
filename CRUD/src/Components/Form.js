import React from "react";

const Form = ({ book, setBook }) => {
  const handleChange = (e) => {
    setBook({
      ...book,

      [e.target.name]: e.target.value,
    });
  };

  let { titulo, autor, edicion } = book;

  //POST
  const handleSubmit = () => {
    edicion = parseInt(edicion, 10);
    //Validación de datos
    if (titulo === "" || autor === "" || edicion <= 0) {
      alert("Todos los campos son obligatorios");
      return;
    } else {
      const requestInit = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(book),
      };
      fetch("http://localhost:9000/api", requestInit)
        .then((res) => res.text())
        .then((res) => console.log(res));

      setBook({
        titulo: "",
        autor: "",
        edicion: 0,
      });
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="titulo" className="form-label">
          Título
        </label>
        <input
          value={titulo}
          onChange={handleChange}
          name="titulo"
          id="titulo"
          className="form-control"
          type="text"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="autor" className="form-label">
          Autor
        </label>
        <input
          value={autor}
          onChange={handleChange}
          name="autor"
          id="autor"
          className="form-control"
          type="text"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="edicion" className="form-label">
          Edición
        </label>
        <input
          value={edicion}
          onChange={handleChange}
          name="edicion"
          id="edicion"
          className="form-control"
          type="number"
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Registrar
      </button>
    </form>
  );
};

export default Form;
