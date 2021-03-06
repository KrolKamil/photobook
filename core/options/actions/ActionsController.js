import { EventEmitter } from 'events';
import FileController from './file/FileController';
import ImagesController from './images/ImagesController';
import StickersController from './stickers/StickersController';

class ActionsController extends EventEmitter {
  constructor () {
    super();
    this.fileController = new FileController();
    this.imagesController = new ImagesController();
    this.stickersController = new StickersController();
    this.init();
  }

    init = () => {
      this.eventsHandler();
      this.activateAction('images');
    }

    eventsHandler = () => {
      this.fileController.on('createFile', () => {
        this.emit('createFile');
      });

      this.imagesController.on('imageClicked', (img) => {
        this.emit('imageClicked', img);
      });
    }

    selectAction = (actionName) => {
      this.disableAllActions();
      this.activateAction(actionName);
    }

    activateAction = (actionName) => {
      switch (actionName) {
        case 'file':
          this.fileController.activate();
          break;
        case 'images':
          this.imagesController.activate();
          break;
        case 'stickers':
          this.stickersController.activate();
          break;
        default:
          console.log('o qurewaaa :======3');
      }
    }

    disableAllActions = () => {
      this.fileController.disable();
      this.imagesController.disable();
      this.stickersController.disable();
    }
}

export default ActionsController;
