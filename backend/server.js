const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

// JWT titkos kulcs
const JWT_SECRET = "nagyonTitkosKulcs123"; // prod-ban env változóban tárold!

// Teszt kedvéért memóriában tároljuk a felhasználókat
const users = [];

// --------------
// REGISZTRÁCIÓ
// --------------
app.post("/register", async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password)
    return res.status(400).json({ message: "Email és jelszó kötelező!" });

  const userExists = users.find((u) => u.email === email);
  if (userExists)
    return res.status(400).json({ message: "Ez az email már foglalt!" });

  // Jelszó hash-elése
  const hashedPassword = await bcrypt.hash(password, 10);

  // Mentés memóriába
  users.push({ email, password: hashedPassword });

  // JWT generálás
  const token = jwt.sign({ email }, JWT_SECRET, { expiresIn: "1h" });

  res.json({ message: "Sikeres regisztráció!", token });
});

// --------------
// LOGIN
// --------------
app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password)
    return res.status(400).json({ message: "Email és jelszó kötelező!" });

  const user = users.find((u) => u.email === email);
  if (!user) return res.status(400).json({ message: "Hibás email vagy jelszó!" });

  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid)
    return res.status(400).json({ message: "Hibás email vagy jelszó!" });

  // JWT generálás
  const token = jwt.sign({ email }, JWT_SECRET, { expiresIn: "1h" });

  res.json({ message: "Sikeres bejelentkezés!", token });
});

// --------------
// Szerver indítása
// --------------
const PORT = 3000;
app.listen(PORT, () => console.log(`Backend fut a http://localhost:${PORT}`));
