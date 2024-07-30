class AppService {
    date(d) {
        let opts = {weekday: 'long', month: 'long', year: 'numeric', day: 'numeric'};
        return new Intl.DateTimeFormat('ru-Ru', opts).format(d);
    };

    time(d) {
        let opts = {hour: 'numeric', minute: '2-digit', timeZone: 'Europe/Moscow'};
        return Intl.DateTimeFormat('ru-Ru', opts).format(d);
    };

    objectIteration(schema, callback) {
        return (Object.keys(schema)).map(name => {
            let control = schema[name];
            return callback(name, control);
        });
    };

    authLink() {
        return {
            'sign-in': '/sign-up',
            'sign-up': '/sign-in',
        };
    };

    authHelpLink() {
        return {
            'password-recovery': '/',
            'sign-in': '/password-recovery',
            'sign-up': '/password-recovery',
        };
    };


    renderSwitch(type, schema, children, callback) {
        switch (type) {
            case 'sign-in':
            case 'sign-up':
            case 'password-reset':
            case 'password-recovery':
                return this.objectIteration(schema, callback);
            case 'verify-email':
            case 'email-activation':
                return children;
            default:
                throw new Error(`Unknown type: ${type}`);
        };
    };

    authResponse() {
        return {
            // 'Server Error': 'Ошибка Сервера',
            // 'Invalid request': 'Неверный запрос',
            // 'Password not found': 'Неверный пароль',
            'Please provide uid': 'Пожалуйста, укажите id',
            'Please provide password': 'Пожалуйста, укажите пароль',
            // 'Not enough rights': 'Недостаточно прав',
            'User not found': 'Пользователь не найден',
            // 'Email not found': 'Электронная почта не найдена',
            // 'Password does not match': 'Пароль не совпадает',
            'User already registered': 'Пользователь уже зарегистрирован',
            'Please provide your id and password': 'Пожалуйста, предоставьте свой id и пароль',
        };
    };
};

export default AppService;