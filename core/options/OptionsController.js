import ActionsController from './actions/ActionsController';
import MenuController from './menu/MenuController';

class OptionsController{
    constructor(){
        this.actionsController = new ActionsController();
        this.menuController = new MenuController();
    }

}

export default OptionsController