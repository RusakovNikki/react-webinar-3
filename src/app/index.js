import React from 'react';
import Main from "./main";
import Basket from "./basket";
import useSelector from "../store/use-selector";
import {Routes, Route} from 'react-router';
import AboutPage from './about-page';
import LayoutCart from './layout-cart';

/**
 * Приложение
 * @returns {React.ReactElement}
 */
function App() {

  const activeModal = useSelector(state => state.modals.name);

  return (
    <>
      <LayoutCart>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/about/:id' element={<AboutPage />} />
        </Routes>
      </LayoutCart>
      {activeModal === 'basket' && <Basket />}
    </>
  );
}

export default App;
