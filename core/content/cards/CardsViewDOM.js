class CardsViewDOM {
    generateCards = (amout) => {
      const cards = [];
      let i = 0;
      for (i; i < amout; i++) {
        const card = this.generateCardDOM(i);
        cards.push(card);
      }
      return cards;
    }

    generateCardDOM = (i) => {
      const card = document.createElement('div');
      card.classList.add('card');
      card.classList.add(`index-${i}`);
      return card;
    }
}

export default CardsViewDOM;
