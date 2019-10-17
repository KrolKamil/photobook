import OptionsController from './options/OptionsController';
import ContentController from './content/ContentController';

class CoreController{
    constructor(){
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
    }
}

export default CoreController;