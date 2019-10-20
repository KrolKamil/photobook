import {EventEmitter} from 'events';
import ImagesView from './ImagesView'

class ImagesController extends EventEmitter{
    constructor(){
        super();
        this.imagesView = new ImagesView();
        this.active = false;
    }

    activate = () => {
        if(this.active === false){
            this.activate = true;
            this.imagesView.activate();
        }
    }

    disable = () => {
        if(this.active === true){
            this.activate = false;
            this.imagesView.disable();
        }
    }

}
export default ImagesController;