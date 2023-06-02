import React, {useCallback} from 'react'
import SideLayout from '../../components/side-layout'
import Button from '../../components/Button'
import Head from '../../components/head'
import LocaleSelect from '../../containers/locale-select'
import Navigation from '../../containers/navigation'
import useTranslate from '../../hooks/use-translate'
import PageLayout from '../../components/page-layout'
import FormEnter from '../../components/form-enter'
import useStore from '../../hooks/use-store'

const EnterPage = () => {
  const {t} = useTranslate();
  const store = useStore();

  const callbacks = {
    onClickLogin: useCallback((data) => store.actions.user.login(data), [store])
  }

  return (
    <PageLayout>
      <SideLayout side={'end'}>
        <Button title={'Вход'} link={'/login'} />
      </SideLayout>
      <Head title={t('title')}>
        <LocaleSelect />
      </Head>
      <Navigation />
      <FormEnter onClickLogin={callbacks.onClickLogin} />
    </PageLayout>
  )
}

export default EnterPage
