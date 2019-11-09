import { canvas, ctx } from './initialCanvas';

const drawCanvas = (path) => {
  const rows = path.length;
  const columns = path[0].length;
  const width = canvas.width / columns;
  const height = canvas.height / rows;

  if (canvas !== null) {
    if (Array.isArray(path)) {
      for (let i = 0; i < rows; i += 1) {
        for (let j = 0; j < columns; j += 1) {
          const pixel = path[i][j];

          ctx.fillStyle = (Array.isArray(pixel))
            ? `rgba(${pixel[0]},${pixel[1]},${pixel[2]},${pixel[3]})`
            : `#${path[i][j]}`;
          ctx.fillRect(j * width, i * height, width, height);
        }
      }
    } else {
      const image = new Image();

      image.setAttribute('src', path);

      image.addEventListener('load', () => {
        ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
      });
    }
  } else throw Error('Canvas not found');
};

export default drawCanvas;
