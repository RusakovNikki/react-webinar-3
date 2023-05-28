import {memo, useCallback, useEffect} from 'react';
import PageLayout from "../../components/page-layout";
import Head from "../../components/head";
import BasketTool from "../../components/basket-tool";
import useStore from "../../store/use-store";
import useSelector from "../../store/use-selector";
import {Routes, Route} from 'react-router';
import MainPage from './pages/main-page';
import AboutPage from './pages/about-page';
import {useNavigate} from "react-router-dom";

function Main() {

  const store = useStore();
  const navigate = useNavigate();

  useEffect(() => {
    store.actions.catalog.load();
  }, []);

  const select = useSelector(state => ({
    amount: state.basket.amount,
    sum: state.basket.sum,
    lang: state.lang.lang,
  }));

  const callbacks = {
    // Открытие модалки корзины
    openModalBasket: useCallback(() => store.actions.modals.open('basket'), [store]),
    changeLanguage: useCallback((lang) => store.actions.lang.setLang(lang), [store]),
    onClickLink: useCallback(() => {
      store.actions.catalog.load();
      navigate('/');
    })
  }

  return (
    <PageLayout>
      <Head title='Магазин' onChangeLanguage={callbacks.changeLanguage} lang={select.lang} />
      <BasketTool onOpen={callbacks.openModalBasket} amount={select.amount}
        sum={select.sum} onClickLink={callbacks.onClickLink} lang={select.lang} />
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/about/:id' element={<AboutPage />} />
      </Routes>
    </PageLayout>
  );
}

export default memo(Main);
