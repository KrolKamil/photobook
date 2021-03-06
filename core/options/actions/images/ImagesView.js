import { EventEmitter } from 'events';
import actionsContainer from '../actionsContainer.js';
import ImagesViewDOM from './ImagesViewDOM';

class ImagesView extends EventEmitter {
  constructor () {
    super();
    this.imagesViewDOM = new ImagesViewDOM();
    this.container = null;
    this.init();
  }

    init = () => {
      this.generateDOM();
      this.addInputFileListener();
    }

    generateDOM = () => {
      this.container = this.imagesViewDOM.generateElements();
    }

    addInputFileListener = () => {
      const input = this.container.querySelector('.images-importer');
      input.addEventListener('change', this.createImages);
    }

    createImages = () => {
      const input = this.container.querySelector('.images-importer');
      Array.from(input.files).forEach(file => {
        const render = new FileReader();
        render.addEventListener('load', this.createImageDOMAndAddItToContainer);
        render.readAsDataURL(file);
      });
    }

    createImageDOMAndAddItToContainer = (e) => {
      const image = this.imagesViewDOM.createImageDOM(e.target.result);
      const imagesContainer = this.container.querySelector('.images');
      const imagesContainerDestroyButton = image.querySelector('.image-container-delete');
      imagesContainer.addEventListener('click', this.userClickedOnImage);
      imagesContainerDestroyButton.addEventListener('click', (event) => {
        event.preventDefault();
        event.stopPropagation();
        imagesContainer.removeChild(image);
      });
      imagesContainer.appendChild(image);
    }

    userClickedOnImage = (e) => {
      this.emit('imageClicked', e.target.src);
    }

    activate = () => {
      actionsContainer.appendChild(this.container);
    }

    disable = () => {
      this.container.remove();
    }
}

export default ImagesView;
