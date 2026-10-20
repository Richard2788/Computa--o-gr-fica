const { createCanvas } = require('canvas');
const fs = require('fs');

const canvas = createCanvas(800, 600);
const ctx = canvas.getContext('2d');

// Fundo
ctx.fillStyle = '#1e1e2e';
ctx.fillRect(0, 0, 800, 600);

// Retângulo
ctx.rotate(-0.1);
ctx.strokeStyle = '#89fa89';
ctx.strokeRect(205, 220, 150, 50);
ctx.rotate(0.1);

ctx.rotate(0.1);
ctx.strokeStyle = '#89fa89';
ctx.strokeRect(435, 140, 150, 50);
ctx.rotate(-0.1);

ctx.fillStyle = '#fae589';
ctx.fillRect(410, 375, 40, 140);

ctx.fillStyle = '#fae589';
ctx.fillRect(350, 375, 40, 140);

ctx.fillStyle = '#89b4fa';
ctx.fillRect(350, 178, 100, 200);


// Círculo
ctx.beginPath();
ctx.arc(400, 100, 80, 0, Math.PI * 2);
ctx.fillStyle = '#f38ba8';
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.arc(370, 75, 10, 0, Math.PI * 2);
ctx.fillStyle = '#ffffff';
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.arc(370, 75, 5, 0, Math.PI * 2);
ctx.fillStyle = '#030303';
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.arc(430, 75, 10, 0, Math.PI * 2);
ctx.fillStyle = '#ffffff';
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.arc(430, 75, 5, 0, Math.PI * 2);
ctx.fillStyle = '#030303';
ctx.fill();
ctx.closePath();


// Exportação em PNG
const buffer = canvas.toBuffer('image/png');
fs.writeFileSync('exercicio1_resultado.png', buffer);