const express = require("express");
const multer = require("multer");
const cors = require("cors");
const db = require("./db");

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static("public"));
app.use("/uploads", express.static("uploads"));

// Config upload de imagem
const storage = multer.diskStorage({
  destination: "uploads/",
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  }
});
const upload = multer({ storage });

// Adicionar exercício
app.post("/exercicio", upload.single("img"), (req, res) => {
  const { nome, rep, info } = req.body;
  const img = req.file ? `/uploads/${req.file.filename}` : null;

  db.run(
    "INSERT INTO exercicios (nome, rep, info, img) VALUES (?, ?, ?, ?)",
    [nome, rep, info, img],
    function (err) {
      if (err) return res.status(500).json({ error: err.message });
      res.json({ id: this.lastID, nome, rep, info, img });
    }
  );
});

// Listar exercícios
app.get("/exercicios", (req, res) => {
  db.all("SELECT * FROM exercicios", [], (err, rows) => {
    res.json(rows);
  });
});

// Editar exercício
app.put("/exercicio/:id", (req, res) => {
  const { nome, rep, info } = req.body;
  db.run(
    "UPDATE exercicios SET nome=?, rep=?, info=? WHERE id=?",
    [nome, rep, info, req.params.id],
    err => {
      if (err) return res.status(500).json({ error: err.message });
      res.json({ success: true });
    }
  );
});

app.listen(3000, () => console.log("Servidor rodando em http://localhost:3000"));