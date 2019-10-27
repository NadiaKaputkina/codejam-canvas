const drawCanvas = (path) => {
    const canvasSize = 512;
    const rows = path.length;
    const columns = path[0].length;
    const width = canvasSize / columns;
    const height = canvasSize / rows;

    const canvas = document.querySelector('canvas');

    if (canvas.getContext) {
        let ctx = canvas.getContext('2d');

        if (Array.isArray(path)) {
            for (let i = 0; i < rows; i++) {
                for (let j = 0; j < columns; j++) {
                    const pixel = path[i][j];
                    ctx.fillStyle = (Array.isArray(pixel)) ?
                        `rgba(${pixel[0]},${pixel[1]},${pixel[2]},${pixel[3]})` :
                        `#${path[i][j]}`;
                    ctx.fillRect(j * width, i * height, width, height);
                }
            }
        } else {
            const image = new Image();

            image.src = path;
            image.onload = () => {
                ctx.drawImage(image, 0, 0, canvasSize, canvasSize)
            }
        }
    }

};

export default drawCanvas;