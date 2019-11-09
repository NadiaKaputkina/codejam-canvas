const canvas = document.querySelector('canvas');
canvas.width = 512;
canvas.height = 512;

const ctx = canvas.getContext('2d');

const initialCanvas = () => {
  if (canvas !== null) {
    for (let row = 0; row < canvas.height / 2; row += 1) {
      for (let column = 0; column < canvas.width / 2; column += 1) {
        const color = (row + column) % 2 ? 255 : 242;

        ctx.fillStyle = `rgb(${color},${color},${color})`;
        ctx.fillRect(column * 10, row * 10, 10, 10);
      }
    }
  } else throw Error('Canvas not found');
};

export { canvas, ctx, initialCanvas };
