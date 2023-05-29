import {memo, useCallback, useEffect} from "react";
import useSelector from "../../store/use-selector";
import PaginationLayout from "../../components/pagination-layout";
import {useNavigate} from "react-router-dom";
import useStore from '../../store/use-store';
import Item from '../../components/item';
import List from '../../components/list';
import Preloader from '../../components/preloader';

function MainPage() {
  const store = useStore();
  const navigate = useNavigate();

  useEffect(() => {
    store.actions.catalog.load();
  }, []);

  const select = useSelector((state) => ({
    list: state.catalog.list,
    pages: state.catalog.pages,
    activePage: state.catalog.activePage,
    lang: state.lang.lang,
    loading: state.catalog.loading
  }));

  const callbacks = {
    // Добавление в корзину
    addToBasket: useCallback(
      (_id) => store.actions.basket.addToBasket(_id),
      [store]
    ),
    // переключение на другую страницу
    onSelectPage: useCallback((page) => store.actions.catalog.load(page)),
    onClickLink: useCallback((link) => {
      navigate(link);
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
            lang={select.lang}
          />
        );
      },
      [callbacks.addToBasket, select.lang]
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
      {select.loading && <Preloader />}
    </>
  );
}

export default memo(MainPage);
