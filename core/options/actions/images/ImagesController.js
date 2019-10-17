import ImagesView from './ImagesView';

class ImagesController{
    constructor(){
        this.imagesView = new ImagesView();
        this.active = false;
    }

    activate = () => {
        if(this.activate === false){
            this.imagesView.activate();
        }
    }

    disable = () => {
        if(this.activate === true){
            this.imagesView.disable();
        }
    }

}
export default ImagesController;