const fs = require('fs');
const path = require('path');

const illustrationsDir = path.join(__dirname, 'IMG', 'illustrations');
const projectsDir = path.join(__dirname, 'IMG', 'projects');
const cardsDir = path.join(__dirname, 'IMG', 'cards');
const outputFile = path.join(__dirname, 'images.json');

function getImagesFromDir(dir) {
    return fs.readdirSync(dir).filter(file => {
        return ['.jpg', '.jpeg', '.png', '.gif'].includes(path.extname(file).toLowerCase());
    }).map(file => path.join('.', 'IMG', path.basename(dir), file));
}

const images = {
    illustrations: getImagesFromDir(illustrationsDir),
    projects: getImagesFromDir(projectsDir),
    cards: getImagesFromDir(cardsDir)
};

fs.writeFileSync(outputFile, JSON.stringify(images, null, 2));
console.log('images.json has been generated.');
