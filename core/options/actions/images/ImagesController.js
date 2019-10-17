import ImagesView from './ImagesView';

class ImagesController{
    constructor(){
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