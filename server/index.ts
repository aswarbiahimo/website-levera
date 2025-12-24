import express, { Request, Response } from "express";
import cors from "cors";
import mysql from "mysql2/promise";

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// 1. Konfigurasi Koneksi database
const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "Biahimo2005",
  database: "levera_db",
});

// 2. Test Koneksi saat server nyala
db.getConnection()
  .then(() => console.log("Berhasil connect ke database"))
  .catch((err) => console.error("Gagal connect ke Database:", err));

// 3. API Routes

// GET : Ambil semua menu dari database
app.get("/api/menu", async (req: Request, res: Response) => {
  try {
    // Query SQL standar
    const [rows] = await db.query("SELECT * FROM menu");
    res.json(rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error mengambil data" });
  }
});

// POST: Tambah menu baru (contoh fitur admin)
app.post("/api/menu", async (req: Request, res: Response) => {
  const { nama, jenis, harga, deskripsi } = req.body;
  try {
    const [result] = await db.query(
      "INSERT INTO menu (nama, jenis, harga, deskripsi) VALUES (?, ?, ?, ?)",
      [nama, jenis, harga, deskripsi]
    );
    res.json({ message: "Menu berhasil disimpan", data: result });
  } catch (error) {
    res.status(500).json({ message: "Error Menyimpan data" });
  }
});

app.listen(PORT, () => {
  console.log("Server API berjalan di http://localhost:${PORT}");
});
