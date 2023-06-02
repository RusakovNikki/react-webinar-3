import React, {useCallback} from 'react'
import SideLayout from '../../components/side-layout'
import Button from '../../components/Button'
import Head from '../../components/head'
import LocaleSelect from '../locale-select'
import Navigation from '../navigation'
import useTranslate from '../../hooks/use-translate'
import useSelector from '../../hooks/use-selector'
import {Link} from 'react-router-dom'

const HeaderContent = ({title}) => {
    const {t} = useTranslate();

    const select = useSelector(state => ({
        token: state.user.token,
        data: state.user.data,
    }));

    return (
        <>
            <SideLayout side={'end'}>
                {select.token && <Link to={'/profile'}>{select.data.profile.name}</Link>}
                <Button title={'Вход'} link={'/login'} />
            </SideLayout>
            <Head title={title || t('title')}>
                <LocaleSelect />
            </Head>
            <Navigation />
        </>
    )
}

export default HeaderContent
