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
};

export default AppService;