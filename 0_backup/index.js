// const express = require("express"); // Express
// const app = express(); // Express app
// const expressLayouts = require("express-ejs-layouts"); // Express EJS Layouts
// const port = 3000; // Port number

// app.set("views", __dirname + "/views"); // Set views directory
// app.set("view engine", "ejs"); // Set view engine to EJS

// app.use(expressLayouts); // Use express layouts
// app.use(express.static(__dirname + "/public")); // Set public directory

// // app.get("/", (req, res) => {
// //   res.send("Hello World!");
// // });

// //route /home
// app.get("/", (req, res) => {
//   // res.sendFile(__dirname + "/index.html");
//   const news = [
//     {
//       title: "Berita 1",
//       content: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
//     },
//     {
//       title: "Berita 2",
//       content: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
//     },
//   ];
//   res.render("index", { title: "Home Page", news: news, layout: "main" });
// });

// //route /data prodi
// app.get("/prodi", (req, res) => {
//   const prodi = [
//     {
//       prodi: "Sistem Informasi",
//       fakultas: "FIKR",
//       singkatan: "SI",
//     },
//     {
//       prodi: "Informatika",
//       fakultas: "FIKR",
//       singkatan: "IF",
//     },
//     {
//       prodi: "Teknik Elektro",
//       fakultas: "FIKR",
//       singkatan: "TE",
//     },
//     {
//       prodi: "Manajemen Informatika",
//       fakultas: "FIKR",
//       singkatan: "TI",
//     },
//     {
//       prodi: "Manajemen",
//       fakultas: "FEB",
//       singkatan: "MJ",
//     },
//     {
//       prodi: "Akuntansi",
//       fakultas: "FEB",
//       singkatan: "AK",
//     },
//   ];
//   res.render("prodi", { title: "Data Prodi", prodi: prodi, layout: "main" });
// });

// //route /mahasiswa
// app.get("/mahasiswa", (req, res) => {
//   res.json({
//     status: "success",
//     message: "Data Mahasiswa",
//     data: [
//       { npm: 2226240011, nama: "Andre" },
//       { npm: 2226240012, nama: "Andri" },
//       { npm: 2226240013, nama: "Andro" },
//     ],
//   });
// });

// //route /contact
// app.get("/contact", (req, res) => {
//   // res.send("Contact Page");
//   // res.sendFile(__dirname + "/contact.html");
//   res.render("contact", { title: "Contact me", layout: "main" });
// });

// //route /about
// app.get("/about", (req, res) => {
//   // res.sendFile(__dirname + "/about.html");
//   res.render("about", { title: "About us", layout: "main" });
// });

// //route /dosen
// app.get("/dosen", (req, res) => {
//   res.json({
//     status: "success",
//     message: "Data Dosen",
//     data: [
//       { prodi: "Sistem Informasi", dosen: ["Iis", "Faris", "Dafid"] },
//       { prodi: "Informatika", dosen: ["Derry", "Siska", "Yohannes"] },
//     ],
//   });
// });

// //route not found
// app.get("*", (req, res) => {
//   res.send("404 Page Not Found");
// });

// // Listen to port
// app.listen(port, () => {
//   console.log(`Example app listening at http://localhost:${port}`);
// });

var express = require("express");
var router = express.Router();

//import controller
const mainController = require("../controllers/mainController");

//route
router.get("/", mainController.index);

module.exports = router;
