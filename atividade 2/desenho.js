const { createCanvas } = require('canvas');
const fs = require('fs');

const canvas = createCanvas(800, 600);
const ctx = canvas.getContext('2d');

// Fundo
ctx.fillStyle = '#1e1e2e';
ctx.fillRect(0, 0, 800, 600);

// Retângulo
ctx.fillStyle = '#89b4fa';
ctx.fillRect(100, 150, 200, 100);

// CírculZ
ctx.beginPath();
ctx.arc(550, 200, 80, 0, Math.PI * 2);
ctx.fillStyle = '#f38ba8';
ctx.fill();

// Exportação em PNG
const buffer = canvas.toBuffer('image/png');
fs.writeFileSync('resultado.png', buffer);