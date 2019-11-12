import '../sass/main.scss';

import { initCanvas } from './initCanvas';
import loadImages from './loadImages';

window.addEventListener('load', () => {
  initCanvas();
  loadImages();
});
