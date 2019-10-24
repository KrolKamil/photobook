import { EventEmitter } from 'events';
import OptionsController from './options/OptionsController';
import ContentController from './content/ContentController';
import ElementsController from './elements/ElementsController';

class CoreController extends EventEmitter {
  constructor () {
    super();
    this.optionsController = new OptionsController();
    this.contentController = new ContentController();
    this.elementsController = new ElementsController();
    this.init();
  }

    init = () => {
      this.eventHandler();
    }

    eventHandler = () => {
      // this.optionsController.on('menuSelected', (status) => {
      //     this.option.activateAction(status);
      // });

      this.optionsController.on('imageClicked', (img) => {
        this.generateImage(img);
      });
    }

    generateImage = (img) => {
      const cardId = this.contentController.getSelectedCardId();
      const image = this.elementsController.createImage(img, cardId);
      console.log(image);
    }
}

export default CoreController;
