import CardsController from './cards/CardsController';

class ContentController {
  constructor () {
    this.cardsController = new CardsController();
  }

  getSelectedCardId = () => {
    return this.cardsController.getSelectedCardId();
  }
}

export default ContentController;
