import { memo, useCallback, useEffect } from "react";
import Item from "../../../../components/item";
import List from "../../../../components/list";
import useStore from "../../../../store/use-store";
import useSelector from "../../../../store/use-selector";
import PaginationLayout from "../../../../components/pagination-layout";
import { useNavigate } from "react-router-dom";

function MainPage() {
  const store = useStore();
  const navigate = useNavigate();

  const select = useSelector((state) => ({
    list: state.catalog.list,
    pages: state.catalog.pages,
    activePage: state.catalog.activePage,
  }));

  const callbacks = {
    // Добавление в корзину
    addToBasket: useCallback(
      (_id) => store.actions.basket.addToBasket(_id),
      [store]
    ),
    // переключение на другую страницу
    onSelectPage: useCallback((page) => store.actions.catalog.load(page)),
    onClickLink: useCallback((id) => {
      navigate(`/about/${id}`);
    }, []),
  };

  const renders = {
    item: useCallback(
      (item) => {
        return (
          <Item
            item={item}
            onAdd={callbacks.addToBasket}
            onClickLink={callbacks.onClickLink}
          />
        );
      },
      [callbacks.addToBasket]
    ),
  };

  return (
    <>
      <List list={select.list} renderItem={renders.item} />
      <PaginationLayout
        pages={select.pages}
        activePage={select.activePage}
        onSelectPage={callbacks.onSelectPage}
      />
    </>
  );
}

export default memo(MainPage);
