import actionsContainer from '../actionsContainer.js';

class ImagesView {
    constructor(){
        this.container = null;
        this.init();
    }

    init = () => {
        this.generateDOM();
    }

    generateDOM = () => {
        const parser = new DOMParser();
        const stringDOM = parser.parseFromString(this.getStringElements(), 'text/html');
        this.container = stringDOM.querySelector('.images-container');
    }

    getStringElements = () => {
        const stringElements = `
        <div class="images-container">
            <input type="file" class="images-importer">
            <div class="import-images-button"></div>
            <div class="images-container"></div>
        </div>
        `;

        return stringElements;
    }

    activate = () => {
        actionsContainer.appendChild(this.container);
    }

    disable = () => {
        actionsContainer.remove();
    }
}

export default ImagesView;