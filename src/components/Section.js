export default class Section {
  constructor(renderer, containerSelector) {
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
  }
  renderItems(items) {
    items.forEach((item) => {
      const card = this._renderer(item);
    });
  }
  prependItem (item) {
    this._container.prepend(item);
  }

  appendItem(item) {
    this._container.append(item);
  }
}