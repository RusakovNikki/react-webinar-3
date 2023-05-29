import React, {useCallback, useEffect} from 'react';
import Main from "./main";
import Basket from "./basket";
import useSelector from "../store/use-selector";
import PageLayout from '../components/page-layout';
import {Routes, Route} from 'react-router';
import AboutPage from './about-page';
import Head from '../components/head';
import BasketTool from '../components/basket-tool';
import useStore from '../store/use-store';
import {useNavigate} from "react-router-dom";



/**
 * Приложение
 * @returns {React.ReactElement}
 */
function App() {

  const activeModal = useSelector(state => state.modals.name);

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
    <>
      <PageLayout>
        <Head title='Магазин' onChangeLanguage={callbacks.changeLanguage} lang={select.lang} />
        <BasketTool onOpen={callbacks.openModalBasket} amount={select.amount}
          sum={select.sum} onClickLink={callbacks.onClickLink} lang={select.lang} />
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/about/:id' element={<AboutPage />} />
        </Routes>
      </PageLayout>
      {activeModal === 'basket' && <Basket />}
    </>
  );
}

export default App;
