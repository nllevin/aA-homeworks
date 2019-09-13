document.addEventListener("DOMContentLoaded", function(){
  
  // Phase I: Setting up Canvas Element
  const canvas = document.getElementById('mycanvas');
  canvas.width = 500;
  canvas.height = 500;
  const ctx = canvas.getContext('2d');

  // Phase II: Draw a Rectangle
  ctx.fillStyle = 'orange';
  ctx.fillRect(0, 0, 500, 500);

  // Phase III: Draw a Circle
  ctx.beginPath();
  ctx.arc(250, 250, 200, 0, 6.29);
  ctx.strokeStyle = 'blue';
  ctx.lineWidth = 50;
  ctx.stroke();
  ctx.fillStyle = 'green';
  ctx.fill();

  // Phase IV: Draw Your Favorite Shape

  ctx.beginPath();
  ctx.lineWidth = 25;
  ctx.moveTo(250, 50);
  ctx.lineTo(250, 300);
  ctx.lineTo(400, 400);
  ctx.moveTo(250, 300);
  ctx.lineTo(100, 400);
  ctx.stroke();
});
