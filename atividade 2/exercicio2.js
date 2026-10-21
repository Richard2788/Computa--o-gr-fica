const { createCanvas } = require('canvas');
const { randomInt } = require('crypto');
const fs = require('fs');
const randomColor = require('randomcolor');

const canvas = createCanvas(1200, 400);
const ctx = canvas.getContext('2d');

ctx.rect(0, 0, canvas.width, canvas.height);
ctx.fillStyle = 'white';
ctx.fill();

function desenharPoligono() {
  const tamanhoQuadrado = 50;

  ctx.lineWidth = 1;

  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      let x = j * tamanhoQuadrado;
      let y = i * tamanhoQuadrado;
      let corMalha = randomColor();
      let cor = (x / tamanhoQuadrado + y / tamanhoQuadrado) % 2 === 0 ? corMalha : 'white';
      ctx.fillStyle = cor;
      ctx.beginPath();
      ctx.moveTo(x, y + tamanhoQuadrado);
      ctx.lineTo(x, y);
      ctx.lineTo(x + tamanhoQuadrado, y);
      ctx.lineTo(x + tamanhoQuadrado, y + tamanhoQuadrado);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();
    }
  }
}

function desenharCirculosDescrescentes() {
  const largura = 1200;
  const altura = 400;
  const raioMaximo = 200;
  const raioMinimo = 10;
  const passoRaio = 10;

  for (let raio = raioMaximo; raio >= raioMinimo; raio -= passoRaio) {
    let cor = (raio / passoRaio) % 2 === 0 ? 'red' : 'white';
    ctx.fillStyle = cor;
    ctx.beginPath();
    ctx.arc(largura / 2, altura / 2, raio, 0, Math.PI * 2);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
  }
}

function desenharMinhocaQuadrada() {
  ctx.lineWidth = 2;

  const tamanhoQuadrado = 20;
  const largura = canvas.width;

  let x = 820;
  let y = 200;
  let direction = 1; // 1 para direita, -1 para esquerda

  // Desenha os quadrados da minhoca até o limite do canvas.
  while (x + tamanhoQuadrado <= largura - 2) {
    direction = randomInt(0, 2) === 0 ? 1 : -1; // Alterna a direção para criar o efeito de "minhoca"
    ctx.fillStyle = (x / tamanhoQuadrado) % 2 === 0 ? 'green' : 'yellow';
    ctx.beginPath();
    ctx.rotate(direction * 0.01); // Pequena rotação para dar efeito de curva
    ctx.rect(x, y, tamanhoQuadrado, tamanhoQuadrado);
    ctx.fill();
    ctx.stroke();

    // Avança para a próxima posição horizontal.
    x += tamanhoQuadrado;
  }
  direction = randomInt(0, 2) === 0 ? 1 : -1; // Alterna a direção para criar o efeito de "minhoca"
    ctx.fillStyle = "red";
    ctx.beginPath();
    ctx.rotate(direction * 0.01); // Pequena rotação para dar efeito de curva
    ctx.rect(x, y, tamanhoQuadrado, tamanhoQuadrado);
    ctx.fill();
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.fillStyle = "black";
    ctx.rect(x + tamanhoQuadrado / 2, y + tamanhoQuadrado / 2 - tamanhoQuadrado / 10, tamanhoQuadrado / 5, tamanhoQuadrado / 5);
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
}

desenharMalha8por8DeQuadrados();
desenharCirculosDescrescentes();
desenharMinhocaQuadrada();

// Exportação em PNG
const buffer = canvas.toBuffer('image/png');
fs.writeFileSync('exercicio2_resultado.png', buffer);