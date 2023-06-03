import React from 'react';
import PageLayout from '../../components/page-layout';
import useSelector from "../../hooks/use-selector";
import ProfileLayout from '../../components/profile-layout';
import HeaderContent from '../../containers/header-content'

const Profile = () => {
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
