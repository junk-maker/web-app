import React from 'react';
import PropTypes from 'prop-types';
// import Sidebar from '../sidebar/Sidebar';
import {Navigate} from 'react-router-dom';
import {ContextData} from '../../../context/Context';
import useTelegram from '../../../hooks/telegram-hook';

const ProtectedRoute = ({children}) => {
    const {tg} = useTelegram();
    const {storageService} = ContextData();

    return (
        storageService.getItem(tg.initDataUnsafe.user.id) ? <div className={'main-view'}>
            {/* <Sidebar/> */}
            <div className={'main-view__container'}>
                {children}
            </div>
        </div> : <Navigate to={'/sign-in'}/>
    );
};

ProtectedRoute.propTypes = {
    children: PropTypes.object.isRequired,
};

export default ProtectedRoute;