import Auth from '../auth/Auth';
import React, {memo} from 'react';
import {ContextData} from '../../../context/Context';

const SignIn = memo(() => {
    const {dataSchemesService} = ContextData();
    
    return (
        <Auth
            type={'sign-in'}
            schema={dataSchemesService.loginSchema()}
        />
    );
});

export default SignIn;