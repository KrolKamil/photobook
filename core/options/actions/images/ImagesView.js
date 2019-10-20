import actionsContainer from '../actionsContainer.js';

class ImagesView {
  constructor () {
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
            <label for="images-importer" class="import-images-button">Zaimportuj Obrazy</label>
            <input type="file" id="images-importer" class="images-importer" name="images-importer" multiple>
            <div class="images"></div>
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
