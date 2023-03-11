import Card from './components/card.js';

export default class Section {
    constructor({data, userId, popupHeandler}, element){
        this._renderItems = {data, userId, popupHeandler};
        this._element = element
    }

    setElement(e){
        this._element.prepend(e);
    }

    renderItem() {
        this._renderItems.forEach(e => {
            const card = new Card(e);

            const cardElement = card.generate();

            this.setElement(cardElement);
        });
    }
}