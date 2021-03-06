import { EventEmitter } from 'events';
import ActionsController from './actions/ActionsController';
import MenuController from './menu/MenuController';

class OptionsController extends EventEmitter {
  constructor () {
    super();
    this.actionsController = new ActionsController();
    this.menuController = new MenuController();
    this.init();
  }

    init = () => {
      this.eventHandler();
    }

    eventHandler = () => {
      this.actionsController.on('createFile', () => {
        this.emit('createFile');
      });

      this.actionsController.on('imageClicked', (img) => {
        this.emit('imageClicked', img);
      });

      this.menuController.on('menuSelected', (status) => {
        this.actionsController.selectAction(status);
      });
    }
}

export default OptionsController;
