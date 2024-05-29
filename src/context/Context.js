import {useContext, createContext} from 'react';

const Context = createContext(null);

export const ContextState = ({children, services}) => {
    const {appService, markupService, storageService, 
        validationService, dataSchemesService} = services
    ;

    return (
        <Context.Provider value={{appService, markupService, storageService, 
            validationService, dataSchemesService,
        }}>
            {children}
        </Context.Provider>
    );
};

export const ContextData = () => {
    const context = useContext(Context);

    if (context === null) {
        throw new Error('Please specify the context');
    };

    return context;
};