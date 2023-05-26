import { memo, useCallback, useEffect } from "react";
import Item from "../../../../components/item";
import List from "../../../../components/list";
import useStore from "../../../../store/use-store";
import useSelector from "../../../../store/use-selector";
import PaginationLayout from "../../../../components/pagination-layout";

function MainPage() {
  const store = useStore();

  useEffect(() => {
    store.actions.catalog.load();
  }, []);

  const select = useSelector((state) => ({
    list: state.catalog.list,
    pages: state.catalog.pages,
  }));

  const callbacks = {
    // Добавление в корзину
    addToBasket: useCallback(
      (_id) => store.actions.basket.addToBasket(_id),
      [store]
    ),
    // переключение на другую страницу
    onSelectPage: useCallback((page) => store.actions.catalog.load(page)),
  };

  const renders = {
    item: useCallback(
      (item) => {
        return <Item item={item} onAdd={callbacks.addToBasket} />;
      },
      [callbacks.addToBasket]
    ),
  };

  return (
    <>
      <List list={select.list} renderItem={renders.item} />
      <PaginationLayout
        pages={select.pages}
        onSelectPage={callbacks.onSelectPage}
      />
    </>
  );
}

export default memo(MainPage);
