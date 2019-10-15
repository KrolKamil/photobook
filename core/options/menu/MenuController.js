import MenuView from './MenuView';

class MenuController{
    constructor(){
        this.menuView = new MenuView();
        this.init();
    }

    init = () => {
        this.setViewListeners();
    }

    setViewListeners = () => {
        this.menuView.on('menuAction', (action) => console.log(action));
    }
}

export default MenuController;