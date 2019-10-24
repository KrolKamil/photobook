import { EventEmitter } from 'events';
import FileView from './FileView';

class FileController extends EventEmitter {
  constructor () {
    super();
    this.fileView = new FileView();
    this.activate = false;
    this.init();
  }

  init = () => {
    this.eventsHandler();
  }

  eventsHandler = () => {
    this.fileView.on('createFile', () => {
      this.emit('createFile');
    });
  }

    activate = () => {
      if (this.active === false) {
        this.activate = true;
        this.fileView.activate();
      }
    }

      disable = () => {
        if (this.active === true) {
          this.activate = false;
          this.fileView.disable();
        }
      }
}

export default FileController;
