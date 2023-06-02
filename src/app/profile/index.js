import React from 'react';
import './style.css'
import {useParams} from 'react-router-dom';
import PageLayout from '../../components/page-layout';
import SideLayout from '../../components/side-layout';
import Button from '../../components/Button';
import Head from '../../components/head';
import LocaleSelect from '../../containers/locale-select';
import Navigation from '../../containers/navigation';
import useTranslate from '../../hooks/use-translate';
import ProfileLayout from '../../components/profile-layout';

const Profile = () => {
    const {id} = useParams()
    const {t} = useTranslate();

    return (
        <PageLayout>
            <SideLayout side={'end'}>
                <Button title={'Вход'} link={'/login'} />
            </SideLayout>
            <Head title={t('title')}>
                <LocaleSelect />
            </Head>
            <Navigation />
            <ProfileLayout />
        </PageLayout>
    )
}

export default Profile
