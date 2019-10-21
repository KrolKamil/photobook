import { EventEmitter } from 'events';
import OptionsController from './options/OptionsController';
import ContentController from './content/ContentController';

class CoreController extends EventEmitter {
  constructor () {
    super();
    this.optionsController = new OptionsController();
    this.contentController = new ContentController();
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
        console.log(img);
      });
    }
}

export default CoreController;
