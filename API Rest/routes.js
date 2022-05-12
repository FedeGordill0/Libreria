const express = require("express");

const routes = express.Router();

//Routes
routes.get("/", (req, res) => {
  res.send("Welcome to my API");
});

//GET
routes.get("/api", (req, res) => {
  req.getConnection((err, conn) => {
    if (err) {
      return res.send(err);
    } else {
      conn.query("select * from books", (err, rows) => {
        if (err) {
          return res.send(err);
        } else {
          res.json(rows);
        }
      });
    }
  });
});

//POST
routes.post("/api", (req, res) => {
  req.getConnection((err, conn) => {
    if (err) {
      return res.send(err);
    } else {
      conn.query("insert into books set ?", [req.body], (err, rows) => {
        if (err) {
          return res.send(err);
        } else {
          res.send("Book added!");
        }
      });
    }
  });
});

//DELETE
routes.delete("/:id", (req, res) => {
  req.getConnection((err, conn) => {
    if (err) {
      return res.send(err);
    } else {
      conn.query(
        "delete from books where id = ?",
        [req.params.id],
        (err, rows) => {
          if (err) {
            return res.send(err);
          } else {
            res.send("Book exclude!");
          }
        }
      );
    }
  });
});

//PUT
routes.put("/:id", (req, res) => {
  req.getConnection((err, conn) => {
    if (err) {
      return res.send(err);
    } else {
      conn.query(
        "update books set ? where id = ?",
        [req.body, req.params.id],
        (err, rows) => {
          if (err) {
            return res.send(err);
          } else {
            res.send("Book updated!");
          }
        }
      );
    }
  });
});

module.exports = routes;
