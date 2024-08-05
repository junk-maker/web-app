import PropTypes from 'prop-types';
import useAuth from '../../../../hooks/auth-hook';
import {Link, useNavigate} from 'react-router-dom';
import {ContextData} from '../../../../context/Context';
import Input from '../../../presentation/ui/input/Input';
import openAlert from '../../../../hooks/open-alert-hook';
// import useTelegram from '../../../../hooks/telegram-hook';
import Button from '../../../presentation/ui/button/Button';
import useValidation from '../../../../hooks/validation-hook';
import {authReducer} from '../../../../store/reducer/authReducer';
import {INITIAL_STATE} from '../../../../store/reducer/authReducer';
import BtnLoader from '../../../presentation/ui/btn-loader/BtnLoader';
import AlertPopup from '../../../presentation/ui/popup/AlertPopup';
import React, {memo, useMemo, useEffect, useReducer, useContext, useCallback} from 'react';
import {authEventHandler, authResetStateHandler} from '../../../../store/reducer/authEventHandler';
// import {authenticationStore} from '../../../../store/authStore';

const Authorization = memo(({type, token, schema, children, resetToken}) => {
    // const {tg} = useTelegram();
    const navigate = useNavigate();
    // const uid = tg?.initDataUnsafe?.user?.id;
    const {isFormValid, setIsFormValid} = useValidation();
    const {form, count, setForm, setCount} = useAuth(30, type, schema);
    const [state, dispatch] = useReducer(authReducer, INITIAL_STATE);
    const {appService, markupService, storageService, validationService} = ContextData();
    const {id, data, loading} = state;
    // let error = '';
    // let email = '';
    // let loading = false;
    // console.log(form.id.value)
    // let {loading} = authenticationStore.getState();
    // console.log(data, 'data');
    // console.log(form?.id?.value, 'form?.id?.value')

    const response = data.error ? data.error : null;
    console.log(response, 'response')
    // const loginData = useMemo(() => {return {
    //     type,
    //     navigate,
    //     email: form?.email?.value,
    //     password: form?.password?.value,
    // }}, [type, navigate, form?.email?.value, form?.password?.value]);

    // const registerData = useMemo(() => {return {
    //     type,
    //     navigate,
    //     name: form?.name?.value,
    //     email: form?.email?.value,
    //     password: form?.password?.value,
    // }}, [type, navigate, form?.name?.value, form?.email?.value, form?.password?.value]);

    // const passwordRecoveryData = useMemo(() => {return {
    //     type,
    //     email: form?.email?.value,
    // }}, [type, form?.email?.value]);

    // const passwordResetData = useMemo(() => {return {
    //     type,
    //     resetToken,
    //     password: form?.password?.value,
    //     confirmPassword: form?.confirmPassword?.value,
    // }}, [type, resetToken, form?.password?.value, form?.confirmPassword?.value]);

    // const verificationData = useMemo(() => {return {
    //     type,
    //     token,
    // }}, [type, token]);

    // useEffect(() => {
    //     let path = window.location.pathname;
    //     let parts = path.split('/');
    //     if (storageService.getItem('authToken') && parts.length === 2) return navigate('/features');
    // }, [navigate, storageService]);

    const loginHandler = useCallback(async () => {
        await authEventHandler('sign-in', form?.id?.value, form?.password?.value, dispatch);
        // await authenticationStore.setState({loading: true});
        // await authenticationStore.fetchAuth(form.id.value, 'sign-in', form.password.value)
        // dispatch(actionToSignIn(loginData));
    }, [form?.id?.value, form?.password?.value, dispatch]);

    const registerHandler = useCallback(async () => {
        await authEventHandler('sign-up', form?.id?.value, form?.password?.value, dispatch);
        // dispatch(actionToSignUp(registerData));
    }, [form?.id?.value, form?.password?.value, dispatch]);

    const resetPasswordHandler = useCallback(() => {
        // dispatch(actionToPasswordReset(passwordResetData))
    }, []);

    const recoverPasswordHandler = useCallback(() => {
        // dispatch(actionToPasswordRecovery(passwordRecoveryData))

    }, []);

    const verifyHandler = useCallback(() => {
        // setCount(30);
        // dispatch(dataVerification(verificationData));
    }, []);

    const emailActivationHandler = useCallback(() => {
        // navigate('/sign-in');
        // dispatch(activationResetStateHandler());
    }, []);

    const setStateHandler = useCallback(schema => {
        let isFormValidLocal = validationService.setAuthStateHandler(schema);
        setForm(schema);
        setIsFormValid(isFormValidLocal);
    }, [setForm, setIsFormValid, validationService]);

    const alertResetStateHandler = useCallback(() => {
        let resetState = () => {
            setForm(schema);
            setIsFormValid(false); 
            authResetStateHandler(dispatch);
        };

        return {
            'sign-in':  resetState,
            'sign-up':  resetState,
        }[type]();
    }, [type, schema, dispatch, setForm, setIsFormValid]);

    const input = useCallback((name, result, control) => (
        <Input
            result={result}
            type={control.type}
            value={control.value}
            autoComplete={control.autocomplete}
            strength={control.validation.strength}
            className={!data.error ? (!control.touched  ? 'input' :
                validationService.isInvalid(control.valid, control.touched, !!control.validation) || (control.validation.confirm &&
                    form.password.value !==  form.confirmPassword.value) ||
                    (control.validation.strength && result.score < 2) ? 'input error' : 'input success') : 'input error'
            }
            onChange={e => validationService.changeHandler(e, name, form, setStateHandler)}
        />
    ), [form, data, setStateHandler, validationService]);

    const classNameExpression = useMemo(() => !data.error ?
        (!loading ? !isFormValid || id?.response ? 'auth__btn-off' : 'auth__btn-on' : 'auth__btn-off') : 'auth__btn-off', [data, loading, id?.response, isFormValid]
    );

    const createAuthInput = useCallback((name, control) => markupService.inputTemplate(form, name, input, control), [form, input, markupService]);

    const markup = useMemo(() => <div className={'auth__form-toggle'}>
        <div className={'auth__form-toggle__cell'}>
            <div className={'auth__form-toggle__title'}>
                <span>{markupService.authToggleTemplate()[type]}</span>
            </div>
            &nbsp;
            <div className={'auth__form-toggle__link'}>
                <Link to={appService.authLink()[type]}>
                    <div className={'auth__form-toggle__heading'}>
                        <span>{markupService.authToggleLinkTemplate()[type]}</span>
                    </div>
                </Link>
            </div>
        </div>
    </div>, [type, appService, markupService]);

    const alert = <AlertPopup onReset={alertResetStateHandler}>
        {data.error ? appService.authResponse()[response] : null}
    </AlertPopup>;

    const disabledForButton = useMemo(() => {
        return {
            'sign-in': !data.error ? (!loading ? !isFormValid : true) : true,
            'sign-up': !data.error ? (!loading ? !isFormValid : true) : true,
        }[type];
    }, [type, data.error, loading, isFormValid]);

    const classNameForButton = useMemo(() => {
        return {
            'sign-in': classNameExpression,
            'sign-up': classNameExpression,
        }[type];
    }, [type, classNameExpression]);

    const onClickForButton = useMemo(() => {
        return {
            'sign-in': loginHandler,
            'sign-up': registerHandler,
        }[type];
    }, [type, loginHandler, registerHandler]);

    const authToggleHelpTemplate = useMemo(() => markupService.authToggleHelpTemplate(markup)[type], [type, markup, markupService]);

    // const authHelpLink = useMemo(() => <Link to={appService.authHelpLink()[type]}>
    //     <div className={'auth__form-help__heading'}>
    //         <span>{markupService.authHelpTemplate()[type]}</span>
    //     </div>
    // </Link>, [type, appService, markupService]);

    const renderSwitch = useMemo(() => appService.renderSwitch(type, form, children, createAuthInput), [type, form, children, appService, createAuthInput]);

    return (
        <>
            <div className={'auth__form'}>
                <div className={'auth__form-wrapper'}>
                    <div className={'auth__form-cell'}>
                        <div className={'auth__form-title'}>
                            <div className={'auth__form-heading'}>
                                <span>{markupService.authHeadingTemplate()[type]}</span>
                            </div>
                        </div>
                        <form
                            className={'auth__form-entry'}
                            onClick={e =>  e.preventDefault()}
                        >
                            {renderSwitch}
                            <div className={'auth__form-btn'}>
                                <Button
                                    onClick={onClickForButton}
                                    disabled={disabledForButton}
                                    className={classNameForButton}
                                >
                                    <div className={'auth__form-btn__title'}>
                                        <span>
                                            {!loading ? markupService.authButtonTemplate(count)[type] : <BtnLoader/>}
                                        </span>
                                    </div>
                                </Button>
                            </div>
                            {/* {
                                type === 'sign-in' || type === 'sign-up' || type === 'password-recovery' ? <div className={'auth__form-help'}>
                                    {authHelpLink}
                                </div> : null
                            } */}
                        </form>
                    </div>
                </div>
                {authToggleHelpTemplate}
            </div>
            
            {openAlert(response) && alert}
        </>
    );
});

Authorization.propTypes = {
    type: PropTypes.string,
    token: PropTypes.string,
    schema: PropTypes.object,
    children: PropTypes.object,
    resetToken: PropTypes.string,
};

export default Authorization;