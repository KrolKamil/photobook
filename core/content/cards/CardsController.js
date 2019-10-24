import CardsView from './CardsView';

class CardsController {
  constructor () {
    this.cardsView = new CardsView();
  }

  getSelectedCardId = () => {
    return this.cardsView.getSelectedCardId();
  }
}

export default CardsController;
