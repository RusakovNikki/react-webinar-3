import React, {useCallback, useEffect} from 'react'
import SideLayout from '../../components/side-layout'
import Button from '../../components/Button'
import Head from '../../components/head'
import LocaleSelect from '../../containers/locale-select'
import Navigation from '../../containers/navigation'
import useTranslate from '../../hooks/use-translate'
import PageLayout from '../../components/page-layout'
import FormEnter from '../../components/form-enter'
import useStore from '../../hooks/use-store'
import HeaderContent from '../../containers/header-content'
import {useNavigate} from 'react-router-dom'
import useSelector from '../../hooks/use-selector'
import useInit from '../../hooks/use-init'

const EnterPage = () => {
  const store = useStore();
  const navigate = useNavigate();

  const select = useSelector(state => ({
    token: state.user.token,
    error: state.user.error
  }));

  const callbacks = {
    onClickLogin: useCallback((data) => store.actions.user.login(data), [store])
  }

  useInit(() => {
    if (select.token) {
      navigate('/profile');
    }
  }, [select])

  return (
    <PageLayout>
      <HeaderContent />
      <FormEnter onClickLogin={callbacks.onClickLogin} error={select.error} />
    </PageLayout>
  )
}

export default EnterPage
