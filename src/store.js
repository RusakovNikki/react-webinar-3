import { generateCode } from "./utils";

/**
 * Хранилище состояния приложения
 */
class Store {
  constructor(initState = {}) {
    this.state = initState;
    this.listeners = []; // Слушатели изменений состояния
    this.shopCart = { // корзина покупок
      itemsList: [],
      itemsCount: 0,
      itemsPrice: 0
    }
  }

  /**
   * Подписка слушателя на изменения состояния
   * @param listener {Function}
   * @returns {Function} Функция отписки
   */
  subscribe(listener) {
    this.listeners.push(listener);
    // Возвращается функция для удаления добавленного слушателя
    return () => {
      this.listeners = this.listeners.filter(item => item !== listener);
    }
  }

  /**
   * Выбор состояния
   * @returns {Object}
   */
  getState() {
    return this.state;
  }

  getShopCart() {
    return this.shopCart
  }

  /**
   * Установка состояния
   * @param newState {Object}
   */
  setState(newState) {
    this.state = newState;
    // Вызываем всех слушателей
    for (const listener of this.listeners) listener();
  }

  setShopCart(newShopCart) {
    this.shopCart = newShopCart;
    // Вызываем всех слушателей
    for (const listener of this.listeners) listener();
  }

  /**
   * Удаление записи по коду
   * @param code
   */
  deleteItem(code) {
    this.setState({
      ...this.state,
      list: this.state.list.filter(item => item.code !== code)
    })
  };

  /**
   * Выделение записи по коду
   * @param code
   */
  selectItem(code) {
    this.setState({
      ...this.state,
      list: this.state.list.map(item => {
        if (item.code === code) {
          item.selected = !item.selected;
        }
        return item;
      })
    })
  }

  /**
   * Добавление в корзину
   */
  addItem(item) {
    let currItem = this.shopCart.itemsList.find(itm => itm.code === item.code)
    if (currItem) {
      currItem = { code: currItem.code, title: currItem.title, price: item.price * (currItem.count + 1), count: ++currItem.count }
    }
    else {
      currItem = { code: item.code, title: item.title, price: item.price, count: 1 }
    }
    this.setShopCart({
      ...this.shopCart,
      itemsList: [...this.shopCart.itemsList.filter(itm => itm.code !== currItem?.code), currItem],
      itemsCount: this.shopCart.itemsCount + 1,
      itemsPrice: this.shopCart.itemsPrice + item.price
    })
  };

  removeItem(item) {
    this.setShopCart({
      ...this.shopCart,
      itemsList: [...this.shopCart.itemsList.filter(itm => itm.code !== item.code)],
      itemsCount: this.shopCart.itemsCount - item.count,
      itemsPrice: this.shopCart.itemsPrice - item.price
    })
  }
}

export default Store;
