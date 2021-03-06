import { EventEmitter } from 'events';
import MenuView from './MenuView';

class MenuController extends EventEmitter {
  constructor () {
    super();
    this.menuView = new MenuView();
    this.init();
  }

    init = () => {
      this.eventHandler();
    }

    eventHandler = () => {
      this.menuView.on('menuSelected', (action) => {
        this.emit('menuSelected', action);
      });
    }
}

export default MenuController;
