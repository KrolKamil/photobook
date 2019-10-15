import OptionsController from './options/OptionsController';
import ContentController from './content/ContentController';

class CoreController{
    constructor(){
        this.optionsController = new OptionsController();
        this.contentController = new ContentController();
    }
}

export default CoreController;