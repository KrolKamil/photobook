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
            ('hi');
            this.imagesView.activate();
        }
    }

    disable = () => {
        if(this.active === true){
            this.imagesView.disable();
        }
    }

}
export default ImagesController;