import React from 'react';
import PropTypes from 'prop-types';
import Authorization from '../../container/form/authorization/Authorization';

const Auth = ({type, token, schema, children, resetToken}) => {
    return (
        <>
            <div className={'auth-view'}>
                <div className={'auth-view__container'}>
                    <div className={'auth'}>
                        <div className={'auth__header'}>
                            <div className={type === 'sign-up' ? 'auth__header--sign-up' : 'auth__header--sign-in'}/>
                        </div>

                        <Authorization type={type} token={token} schema={schema} children={children} resetToken={resetToken}/>
                        
                        <div className={'auth__footer'}>
                            <div/>
                        </div>
                    </div>
                </div>
            </div>
        </> 
    );  
};

Auth.propTypes = {
    type: PropTypes.string,
    token: PropTypes.string,
    schema: PropTypes.object,
    children: PropTypes.object,
    resetToken: PropTypes.string,
};

export default Auth;