import {memo, useCallback, useEffect} from 'react';
import Item from "../../components/item";
import PageLayout from "../../components/page-layout";
import Head from "../../components/head";
import BasketTool from "../../components/basket-tool";
import List from "../../components/list";
import useStore from "../../store/use-store";
import useSelector from "../../store/use-selector";
import PaginationLayout from '../../components/pagination-layout';

function Main() {

  const store = useStore();

  useEffect(() => {
    store.actions.catalog.load();
  }, []);

  const select = useSelector(state => ({
    list: state.catalog.list,
    amount: state.basket.amount,
    sum: state.basket.sum,
    pages: state.catalog.pages
  }));

  const callbacks = {
    // Добавление в корзину
    addToBasket: useCallback(_id => store.actions.basket.addToBasket(_id), [store]),
    // Открытие модалки корзины
    openModalBasket: useCallback(() => store.actions.modals.open('basket'), [store]),
    // переключение на другую страницу
    onSelectPage: useCallback(page => store.actions.catalog.load(page))
  }

  const renders = {
    item: useCallback((item) => {
      return <Item item={item} onAdd={callbacks.addToBasket} />
    }, [callbacks.addToBasket]),
  };

  return (
    <PageLayout>
      <Head title='Магазин' />
      <BasketTool onOpen={callbacks.openModalBasket} amount={select.amount}
        sum={select.sum} />
      <List list={select.list} renderItem={renders.item} />
      <PaginationLayout pages={select.pages} onSelectPage={callbacks.onSelectPage} />
    </PageLayout>
  );
}

export default memo(Main);
