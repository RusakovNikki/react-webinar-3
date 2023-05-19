import React, { useCallback, useState } from 'react';
import List from "./components/list";
import Controls from "./components/controls";
import Head from "./components/head";
import PageLayout from "./components/page-layout";
import Popup from './components/popup';

/**
 * Приложение
 * @param store {Store} Хранилище состояния приложения
 * @returns {React.ReactElement}
 */
function App({ store }) {
  const [openPopup, setOpenPopup] = useState(false)
  const list = store.getState().list;
  const shopCart = store.getShopCart();

  const callbacks = {
    onAddItem: useCallback((price) => {
      store.addItem(price);
    }, [store]),
    onOpenPupup: useCallback(() => {
      setOpenPopup(prev => !prev)
    }, []),
    onRemoveItem: useCallback((item) => {
      store.removeItem(item)
    }, [])
  }

  return (
    <PageLayout>
      <Head title='Магазин' />
      <Controls shopCart={shopCart} onOpenPupup={callbacks.onOpenPupup} />
      <List list={list}
        onAddItem={callbacks.onAddItem} />
      {openPopup && <Popup setOpenPopup={setOpenPopup} shopCart={shopCart} onRemoveItem={callbacks.onRemoveItem} />}
    </PageLayout>
  );
}

export default App;
