const img1 = require('../assets/images/4x4');
const img2 = require('../assets/images/32x32');
const img3 = require('../assets/images/image.png');

import drawCanvas from './drawCanvas';

const loadImages = () => {
    const imageName = [{name: '4 x 4', path: img1},
                        {name: '32 x 32', path: img2},
                        {name: '256 x 256', path: img3}];
    const imagesList = document.querySelector('.images-list');

    imageName.forEach(image => {
        const button = document.createElement('button');

        button.setAttribute('class', 'btn');
        button.innerHTML = image.name;
        button.addEventListener('click', () => {
            drawCanvas(image.path);
        });

        const li = document.createElement('li');
        li.appendChild(button);
        li.setAttribute('class', 'images-item');

        imagesList.appendChild(li);
    })
};

export default loadImages;