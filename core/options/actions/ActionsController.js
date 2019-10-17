import FileController from './file/FileController';
import ImagesController from './images/ImagesController';

class ActionsController{
    constructor(){
        this.fileController = new FileController();
        this.imagesController = new ImagesController();
    }

    activateAction = (actionName) => {
        switch(actionName){
            case 'file':
                this.fileController.activate();
                break;
            case 'images':
                this.imagesController.activate();
                break;
            default:
                console.log('o qurewaaa :======3')
        }
    }

    disableAllActions = () => {
        this.fileController.disable();
        this.imagesController.disable();
    }
}

export default ActionsController;
