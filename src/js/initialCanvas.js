const initialCanvas = () => {
    const canvas = document.querySelector('canvas');
    canvas.width = 512;
    canvas.height = 512;

    if (canvas.getContext) {
        let ctx = canvas.getContext('2d');

        for (let i = 0; i < canvas.height / 2; i++) {
            for (let j = 0; j < canvas.width / 2; j++) {
                ctx.fillStyle = `rgb(${!((i+j)%2) ? 255 : 242},${!((i+j)%2) ? 255 : 242},${!((i+j)%2) ? 255 : 242})`;
                ctx.fillRect(j * 10, i * 10, 10, 10);
            }
        }
    }
};

export default initialCanvas;
