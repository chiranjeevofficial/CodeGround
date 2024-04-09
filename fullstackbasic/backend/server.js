import express from "express";

const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Fast Server is ready");
});

// get a list of 7 chiranjeevi

app.get("/api/chiranjeevi", (req, res) => {
  const chiranjeevi = [
    {
      id: 1,
      title: "Ashwatthama",
    },
    {
      id: 2,
      title: "Bali",
    },
    {
      id: 3,
      title: "Ved Vyas",
    },
    {
      id: 4,
      title: "Hanuman",
    },
    {
      id: 5,
      title: "Vibhishana",
    },
    {
      id: 6,
      title: "Kripacharya",
    },
    {
      id: 7,
      title: "Parshuram",
    },
  ];

  res.send(chiranjeevi); // Send the list of chiranjeevi as JSON
});

app.listen(port, () => {
  console.log(`Server at http://localhost:${port}`);
});
