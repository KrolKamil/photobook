import ActionsController from './actions/ActionsController';
import MenuController from './menu/MenuController';

class OptionsController{
    constructor(){
        this.actionsController = new ActionsController();
        this.menuController = new MenuController();
        this.init();
    }

    init = () => {
        this.eventHandler();
    }

    eventHandler = () => {
        this.menuController.on('menuSelected', (status) => {
            this.actionsController.activateAction(status);
        });
    }

}

export default OptionsController