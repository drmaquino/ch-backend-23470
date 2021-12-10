import express from "express";

import Perimetro from "./lib/perimetro";
import Superficie from "./lib/superficie";

const app = express();

app.get("/perimetro/:figura/:param1/:param2?", (req, res) => {
  const { figura, param1, param2 } = req.params;
  let resultado;
  switch (figura) {
    case "cuadrado":
      resultado = Perimetro.cuadrado(Number(param1));
      break;
    case "rectangulo":
      resultado = Perimetro.rectangulo(Number(param1), Number(param2));
      break;
    case "circulo":
      resultado = Perimetro.circulo(Number(param1));
      break;
  }
  res.send({
    calculo: "perimetro",
    figura,
    param1,
    param2,
    resultado,
  });
});

app.get("/superficie/:figura/:param1/:param2?", (req, res) => {
  let { figura, param1, param2 } = req.params;
  let resultado;
  switch (figura) {
    case "cuadrado":
      resultado = Superficie.cuadrado(Number(param1));
      break;
    case "rectangulo":
      resultado = Superficie.rectangulo(Number(param1), Number(param2));
      break;
    case "circulo":
      resultado = Superficie.circulo(Number(param1));
      break;
  }
  res.send({
    calculo: "superficie",
    figura,
    param1,
    param2,
    resultado,
  });
});

const PORT: number = 8080;
app.listen(PORT, () => {
  console.log(`Servidor express Typescript/Webpack en puerto ${PORT}`);
});
