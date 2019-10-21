import CardsViewDOM from './CardsViewDOM';

class CardsView {
  constructor () {
    this.container = null;
    this.cards = null;
    this.cardsViewDOM = new CardsViewDOM();
    this.init();
  }

    init = () => {
      this.setContainer();
      this.createCards();
    }

    setContainer = () => {
      this.container = document.querySelector('.class');
    }

    createCards = () => {
      this.cards = this.cardsViewDOM.generateCards(10);
    }
}

export default CardsView;
