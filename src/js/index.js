import '../sass/main.scss';

import initialCanvas from './initialCanvas';
import loadImages from './loadImages';

const init = () => {
    window.onload = () => {
        initialCanvas();
        loadImages();
    };
};

init();