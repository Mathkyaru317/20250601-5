// 每個鼓點的出現時間（秒），位置（左/右），顏色漸層
export const beats = [
  // 開頭4小節，每小節4拍
  { time: 1.0, x: 200, colorFrom: '#aee1f9', colorTo: '#fcb6f7' }, // 左
  { time: 1.5, x: 600, colorFrom: '#fcb6f7', colorTo: '#aee1f9' }, // 右
  { time: 2.0, x: 200, colorFrom: '#aee1f9', colorTo: '#fcb6f7' },
  { time: 2.5, x: 600, colorFrom: '#fcb6f7', colorTo: '#aee1f9' },
  { time: 3.0, x: 200, colorFrom: '#aee1f9', colorTo: '#fcb6f7' },
  { time: 3.5, x: 600, colorFrom: '#fcb6f7', colorTo: '#aee1f9' },
  { time: 4.0, x: 200, colorFrom: '#aee1f9', colorTo: '#fcb6f7' },
  { time: 4.5, x: 600, colorFrom: '#fcb6f7', colorTo: '#aee1f9' },
  // 副歌前加密
  { time: 6.0, x: 400, colorFrom: '#f9e7ae', colorTo: '#aee1f9' }, // 中
  { time: 6.5, x: 200, colorFrom: '#aee1f9', colorTo: '#fcb6f7' },
  { time: 7.0, x: 600, colorFrom: '#fcb6f7', colorTo: '#aee1f9' },
  { time: 7.5, x: 400, colorFrom: '#f9e7ae', colorTo: '#aee1f9' },
  // 副歌
  { time: 9.0, x: 200, colorFrom: '#aee1f9', colorTo: '#fcb6f7' },
  { time: 9.5, x: 600, colorFrom: '#fcb6f7', colorTo: '#aee1f9' },
  { time: 10.0, x: 400, colorFrom: '#f9e7ae', colorTo: '#aee1f9' },
  { time: 10.5, x: 200, colorFrom: '#aee1f9', colorTo: '#fcb6f7' },
  { time: 11.0, x: 600, colorFrom: '#fcb6f7', colorTo: '#aee1f9' },
  { time: 11.5, x: 400, colorFrom: '#f9e7ae', colorTo: '#aee1f9' },
  // ...可依需求繼續延伸
];

// filepath: c:\Users\Microsoft\OneDrive\桌面\20250324-main\sketch.js
import { beats } from './beats.js'; // 若用 ES6 module

function draw() {
  background(220);
  let now = (millis() - startTime) / 1000;
  for (let beat of beats) {
    if (!beat.hit) {
      let y = (now - beat.time + 1) * 300;
      drawCuteBeat(beat.x, y, beat.colorFrom, beat.colorTo);
    }
  }
  // ...其餘內容...
}

function drawCuteBeat(x, y, colorFrom, colorTo) {
  let grad = drawingContext.createRadialGradient(x, y, 10, x, y, 30);
  grad.addColorStop(0, colorFrom);
  grad.addColorStop(1, colorTo);
  drawingContext.save();
  drawingContext.beginPath();
  drawingContext.arc(x, y, 30, 0, 2 * Math.PI);
  drawingContext.closePath();
  drawingContext.fillStyle = grad;
  drawingContext.shadowColor = "#fff";
  drawingContext.shadowBlur = 15;
  drawingContext.fill();
  drawingContext.restore();
  // 可愛表情
  fill(0);
  ellipse(x - 10, y - 5, 6, 6);
  ellipse(x + 10, y - 5, 6, 6);
  noFill();
  stroke(0);
  strokeWeight(2);
  arc(x, y + 5, 16, 10, 0, PI);
}