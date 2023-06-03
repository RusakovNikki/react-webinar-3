import React, {Fragment, useCallback, useContext, useEffect, useMemo, useState} from 'react';
import {Routes, Route, Navigate} from 'react-router-dom';
import useSelector from "../hooks/use-selector";
import Main from "./main";
import Basket from "./basket";
import Article from "./article";
import EnterPage from './enter-page';
import Profile from './profile';
import {privateRoutes, publicRoutes} from '../routes';
import useInit from '../hooks/use-init';
import useStore from '../hooks/use-store';

/**
 * Приложение
 * @returns {React.ReactElement}
 */
function App() {
  const store = useStore();

  const select = useSelector(state => ({
    activeModal: state.modals.name,
    token: state.user.token
  }));

  useInit(() => {
    store.actions.user.setUserData();
  }, [])

  return (
    <>
      <Routes>
        {select.token ?
          privateRoutes.map(({key, path, Component}) => (
            <Fragment key={key}>
              <Route path={path} element={<Component />} />
            </Fragment>
          )) :
          publicRoutes.map(({key, path, Component}) => (
            <Fragment key={key}>
              <Route path={path} element={<Component />} />
            </Fragment>
          ))}
        <Route path="*" element={<Navigate to={''} replace />} />
      </Routes>

      {select.activeModal === 'basket' && <Basket />}
    </>
  );
}

export default App;
