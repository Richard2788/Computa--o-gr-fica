const { createCanvas } = require("canvas");
const { randomInt } = require("crypto");
const fs = require("fs");

const canvas = createCanvas(800, 800);
const ctx = canvas.getContext("2d");

ctx.rect(0, 0, canvas.width, canvas.height);
ctx.fillStyle = "white";
ctx.fill();

function desenharPoligono(lados, tamanho) {
  const centroX = canvas.width / 2;
  const centroY = canvas.height / 2;
  const angulo = (2 * Math.PI) / lados;
  let x, y;

  ctx.beginPath();
  for (let i = 0; i < lados; i++) {
    x = centroX + tamanho * Math.cos(i * angulo);
    y = centroY + tamanho * Math.sin(i * angulo);
    if (i === 0) {
      ctx.moveTo(x, y);
    } else {
      ctx.lineTo(x, y);
    }
  }
  ctx.fillStyle = "lightblue";
  ctx.fill();
  ctx.strokeStyle = "black";
  ctx.lineWidth = 2;
  ctx.closePath();
  ctx.stroke();
  
  ctx.font = "20px Arial";
  ctx.fillStyle = "black";
  ctx.fillText(`Polígono de ${lados} lados`, centroX - 95, centroY - tamanho - 20);
  ctx.fillText(`Lados: ${lados}`, centroX - 30, centroY + tamanho + 20);
  ctx.fillText(`Tamanho: ${tamanho}`, centroX - 30, centroY + tamanho + 40);
}

desenharPoligono(10, 300);

// Exportação em PNG
const buffer = canvas.toBuffer("image/png");
fs.writeFileSync("exercicio3_resultado.png", buffer);
