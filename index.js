import express from "express";
import cors from "cors";

const app = express();
app.use(cors());

const PORT = 4000;

app.get("/first", (req, res) => {
    // res.status(200).json({ message: "welcome" }); // Corrected from req.status to res.status
    res.status(200).send(
      `<div style="background-color:blue: ; color:white">
      <h1>hey pal, welcome</h1>
      </div>`)
});

app.listen(PORT, () => {
    console.log('App is listening on port', PORT);
});


