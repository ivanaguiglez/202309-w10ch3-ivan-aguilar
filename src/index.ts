import express from "express";

const app = express();

app.listen(4000, () => {
  console.log("Hola. Esto es una template");
});

export default app;
