import React from 'react';
import {useParams} from 'react-router-dom';
import PageLayout from '../../components/page-layout';
import useSelector from "../../hooks/use-selector";
import useTranslate from '../../hooks/use-translate';
import ProfileLayout from '../../components/profile-layout';
import HeaderContent from '../../containers/header-content'
import Navigation from '../../containers/navigation';

const Profile = () => {
    const {id} = useParams()

    const select = useSelector(state => ({
        token: state.user.token,
        data: state.user.data,
    }));

    return (
        <PageLayout>
            <HeaderContent />
            <ProfileLayout name={select.data.profile.name} number={select.data.profile.phone} mail={select.data.email} />
        </PageLayout>
    )
}

export default Profile
