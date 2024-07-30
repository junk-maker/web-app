import ValidationService from './ValidationService';

class MarkupService {
    constructor() {
        this.validationService = new ValidationService();
    };

    authHeadingTemplate() {
        return {
            'sign-up': 'Регистрация',
            'sign-in': 'Авторизация',
        };
    };

    previewHeadingTemplate() {
        return {
            faq: 'faq',
            go: 'Перейти',
            title: 'Бюджет',
            auth: 'Авторизоваться',
            greeting: 'Добро пожаловать',
            action: 'Возьми финансы под контроль'
        };
    };

    authToggleTemplate() {
        return {
            'sign-up': 'Воспользоваться',
            'sign-in': 'Нет аккаунта? ',
        };
    };

    authToggleLinkTemplate() {
        return {
            'sign-up': 'аккаунтом',
            'sign-in': 'Зарегистрироваться',
        };
    };

    authToggleHelpTemplate(markup) {
        return {
            'sign-in': markup,
            'sign-up': markup,
        };
    };

    authHelpTemplate() {
        return {
            'sign-up': 'Нужна помощь?',
            'sign-in': 'Нужна помощь?',
        };
    };

    inputTemplate(form, name, input, control) {
        let htmlFor = `${control.type}-${Math.random()}`;
        let result = control.validation?.strength ? this.validationService.strengthChecker(form.password.value, this.language) : null;
     
        return (
            <div className={'form'} key={control.id}>
                <div className={'form__container'}>

                    <label htmlFor={htmlFor} className={'form__label'}>
                        <div className={'form__title'}>
                            <span className={'form__span'}>{control.label}</span>
                        </div>
                    </label>
                    <div className={'form__wrapper'}>
                        <div className={'form__cell'}>
                            {input(name, result, control)}
                        </div>
                        {this.validationMarkupTemplate(control)}
                        {this.matchingPasswordsMarkupTemplate(form, control)}
                        {this.passwordStrengthMarkupTemplate(form, result, control)}
                    </div>
                </div>
            </div>
        );
    };

    validationMarkupTemplate(control) {
        let error = control.type === 'id' ? control.value.length > 2 ? 
            'Неверный ID' : control.error : control.error || 'Введите верное значение';

        return  this.validationService.isInvalid(control.valid, control.touched, !!control.validation) || control.required ?
            <div className={'form__error'}>
                <div className= {'form__heading'}>
                    <span>{error}</span>
                </div>
            </div> : null
        ;
    };

    matchingPasswordsMarkupTemplate(form, control) {
        return form.hasOwnProperty('confirmPassword') ? control.value !== form.password.value &&
            form.confirmPassword.value.length > 1 ? control.validation.confirm ?
                <div className={'form__error'}>
                    <div className={
                        !form.hasOwnProperty('oldPassword') ? 'form__heading' : 'form__heading'}>
                        <span>
                            {'Пароли не совпадают'}
                        </span>
                    </div>
                </div> : null
            : null : null
        ;
    };

    passwordStrengthMarkupTemplate(form, result, control) {
        return control.validation.strength ? form.password.value.length > 1 ?
            <div className={'form__error'}>
                <div className={this.classNamePasswordStrength()[result.score]}>
                    <span>{result.message}</span>
                </div>
            </div> : null : null
        ;
    };

    authButtonTemplate(count) {
        return {
            'sign-in': 'Войти',
            'sign-up': 'Создать',
        };
    };

    classNamePasswordStrength() {
        return {
            2: 'form__medium',
            3: 'form__strong',
            1: 'form__heading',
        };
    };
};

export default MarkupService;