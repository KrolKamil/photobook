class CardsViewDOM {
    generateCards = (amout) => {
      const cards = [];
      let i = 0;
      for (i; i < amout; i++) {
        cards.append(this.generateCard());
      }
    }

    generateCard = () => {
      const card = document.createElement('div');
      card.classList.add('card');
      return card;
    }
}

export default CardsViewDOM;
