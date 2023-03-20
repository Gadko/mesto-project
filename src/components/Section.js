export default class Section {
    constructor({ renderer }, containerSelector) {
        this._renderer = renderer;
        this._container = document.querySelector(containerSelector);
    }
    // принимает DOM-элемент и добавляет его в контейнер
    _appendItem(element) {
        this._container.append(element);
    }
    _prependItem(element) {
        this._container.prepend(element);
    }

    clear() {
        this._container.innerHTML = '';
    }
    // отрисовка всех элементов
    renderItems(cards) {
        this.clear();

        cards.forEach(item => {
            this._appendItem(this._renderer(item));
        });
    }
    // отрисовка одного элемента
    renderItem(card) {
        this._prependItem(this._renderer(card));
    }
}