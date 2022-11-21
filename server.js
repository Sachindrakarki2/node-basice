import express from "express";
const app = express();
const PORT = 800;
app.get("/", (req, res, next) => {
  console.log("hey this is my first server");
  res.send(
    "heyeyeye ddsdnsdfndsmfn fdsfdsf ds f sd f dsfdsf dsf dsf sd fsdf d fdsf f sd fdsf dsff sd fdf awesome"
  );
});

app.listen(PORT, (error) => {
  error
    ? console.log(error)
    : console.log(`your server running at http://localhost:${PORT}`);
});
