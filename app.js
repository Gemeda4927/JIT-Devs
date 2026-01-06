require("dotenv").config();
const express = require("express");

const app = express();
app.use(express.json());

app.get("/health", (req, res) => {
  res.status(200).json({
    status: "OK",
    uptime: process.uptime(),
    timestamp: new Date(),
  });
});

// app.get("/nasir", (req, res) => {
//   res.json({
//     message: "Nasir baga nagaan gara backend dhufte",
//   });
// });

/*app.get("/", (req, res) => {
  res.json({
    message: "fixeera"
  });

*/
app.get("/hello", (req, res) => {
  res.json({
    message: "hello from server ",
  });
});
// Start Server
// =====================
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🔥 Server running on http://localhost:${PORT}`);
});
