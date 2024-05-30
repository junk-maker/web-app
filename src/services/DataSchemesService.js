class DataSchemesService {
    loginSchema(){
        return {
            id: {
                id: 0,
                value: '',
                valid: true,
                type: 'id',
                touched: false,
                validation: {
                    id: true,
                    required: true
                },
                label: 'ID',
                error: 'Обязательно'
            },
            password: {
                id: 1,
                value: '',
                valid: true,
                touched: false,
                type: 'password',
                validation: {
                    minLength: 6,
                    required: true
                },
                autocomplete: 'on',
                label: 'Пароль',
                error: 'Обязательно'
            }
        };
    };

    registerSchema() {
        return {
            id: {
                id: 1,
                value: '',
                valid: true,
                type: 'id',
                touched: false,
                validation: {
                    id: true,
                    required: true
                },
                label: 'ID',
                error: 'Обязательно'
            },
            password: {
                id: 2,
                value: '',
                valid: true,
                touched: false,
                type: 'password',
                validation: {
                    minLength: 2,
                    strength: true,
                    required: true
                },
                autocomplete: 'on',
                label: 'Пароль',
                error: 'Обязательно'

            },
            confirmPassword: {
                id: 3,
                value: '',
                valid: true,
                touched: false,
                type: 'password',
                validation: {
                    minLength: 2,
                    confirm: true,
                    required: true
                },
                autocomplete: 'on',
                error: 'Обязательно',
                label: 'Подтвердить пароль'
            }
        };
    };

    changeIdSchema() {
        return {
            id: {
                id: 0,
                value: '',
                valid: true,
                type: 'id',
                touched: false,
                validation: {
                    id: true,
                    required: true
                },
                label: 'Сменить ID',
                error: 'Обязательно'
            }
        };
    };

    deleteAccountSchema() {
        return {
            password: {
                id: 0,
                value: '',
                valid: true,
                touched: false,
                type: 'password',
                validation: {
                    delete: true,
                    minLength: 6,
                    required: true,
                },
                autocomplete: 'on',
                error: 'Обязательно',
                label: 'Введите пароль'
            }
        };
    };

    passwordResetSchema() {
        return {
            password: {
                id: 0,
                value: '',
                valid: true,
                touched: false,
                type: 'password',
                validation: {
                    minLength: 2,
                    strength: true,
                    required: true,
                },
                autocomplete: 'on',
                error: 'Обязательно',
                label: 'Новый пароль'
            },
            confirmPassword: {
                id: 1,
                value: '',
                valid: true,
                touched: false,
                type: 'password',
                validation: {
                    minLength: 2,
                    confirm: true,
                    required: true
                },
                autocomplete: 'on',
                error: 'Обязательно',
                label: 'Подтвердить новый пароль'
            }
        };
    };

    changePasswordSchema() {
        return {
            oldPassword: {
                id: 0,
                value: '',
                valid: true,
                touched: false,
                type: 'password',
                validation: {
                    minLength: 6,
                    required: true
                },
                autocomplete: 'on',
                error: 'Обязательно',
                label: 'Старый пароль'
            },
            password: {
                id: 1,
                value: '',
                valid: true,
                touched: false,
                type: 'password',
                validation: {
                    minLength: 2,
                    strength: true,
                    required: true,
                },
                autocomplete: 'on',
                error: 'Обязательно',
                label: 'Новый пароль'
            },
            confirmPassword: {
                id: 2,
                value: '',
                valid: true,
                touched: false,
                type: 'password',
                validation: {
                    minLength: 6,
                    confirm: true,
                    required: true
                },
                autocomplete: 'on',
                error: 'Обязательно',
                label: 'Подтвердить новый пароль'
            },
        };
    };

    dropdownSchema(toggle, value, currency) {
        if (toggle) {
            return {
                value: {
                    options: value
                },
                currency: {
                    options: currency,
                }
            };
        } else {
            return {
                value: {
                    options: value,
                }
            };
        }
    };
};

export default DataSchemesService;