import CardsViewDOM from './CardsViewDOM';

class CardsView {
  constructor () {
    this.container = null;
    this.cardsNumber = null;
    this.cards = null;
    this.amoutOfCards = 0;
    this.cardIndex = 0;
    this.cardsViewDOM = new CardsViewDOM();
    this.init();
  }

    init = () => {
      this.amoutOfCards = 10;
      this.setContainer();
      this.createCards();
      this.showFirstCard();
      this.createNavigationHandler();
      this.showSelectedCardToUser();
    }

    setContainer = () => {
      this.container = document.querySelector('.cards');
      this.cardsContainer = document.querySelector('.cards-container');
    }

    createCards = () => {
      this.cards = this.cardsViewDOM.generateCards(this.amoutOfCards);
    }

    showFirstCard = () => {
      this.showCardOfIndex(0);
    }

    showCardOfIndex = (index) => {
      if ((index >= 0) && (index < this.amoutOfCards)) {
        this.hideCard();
        this.cardIndex = index;
        this.cardsContainer.appendChild(this.cards[index]);
      }
    }

    hideCard = () => {
      if (this.cardsContainer.firstChild !== null) {
        this.cardsContainer.removeChild(this.cards[this.cardIndex]);
      }
    }

    createNavigationHandler = () => {
      const navLeft = this.container.querySelector('.nav.left');
      const navRight = this.container.querySelector('.nav.right');

      navLeft.addEventListener('click', this.showPreviousCard);
      navRight.addEventListener('click', this.showNextCard);
    }

    showPreviousCard = () => {
      const indexMinusOne = this.cardIndex - 1;
      this.showCardOfIndex(indexMinusOne);
      this.showSelectedCardToUser();
    }

    showNextCard = () => {
      const indexPlusOne = this.cardIndex + 1;
      this.showCardOfIndex(indexPlusOne);
      this.showSelectedCardToUser();
    }

    showSelectedCardToUser = () => {
      const numberContainer = this.container.querySelector('.card-number .number');
      const selectedCardIndex = this.cardIndex + 1;
      numberContainer.innerHTML = `${selectedCardIndex}/${this.amoutOfCards}`;
    }

    getSelectedCardId = () => {
      return this.selectedCardIndex();
    }
}

export default CardsView;
