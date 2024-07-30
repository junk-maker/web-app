import React, {memo} from 'react';
import Auth from '../auth/Auth';
import {ContextData} from '../../../context/Context';

const SignUp = memo(() => {
    const {dataSchemesService} = ContextData();

    return (
        <Auth
            type={'sign-up'}
            schema={dataSchemesService.registerSchema()}
        />
    );
});

export default SignUp;