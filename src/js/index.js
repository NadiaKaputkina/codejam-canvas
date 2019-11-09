import '../sass/main.scss';

import { initialCanvas } from './initialCanvas';
import loadImages from './loadImages';

window.addEventListener('load', () => {
  initialCanvas();
  loadImages();
});
