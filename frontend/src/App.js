import './App.scss';
import Frame from './hoc/frame/Frame';
import {ContextState} from './context/Context';
import AppService from './services/AppService';
import useTelegram from './hooks/telegram-hook';
import React, {useMemo, useEffect} from 'react';
import Crm from './components/container/Crm/Crm';
import MarkupService from './services/MarkupService';
import StorageService from './services/StorageService';
import {Route, Routes, Navigate} from 'react-router-dom';
import ValidationService from './services/ValidationService';
import Preview from './components/container/preview/Preview';
import SignIn from './components/presentation/sign-in/SignIn';
import SignUp from './components/presentation/sign-up/SignUp';
import DataSchemesService from './services/DataSchemesService';
import ProtectedRoute from './components/presentation/protectedRoute/protectedRoute';

const App = () => {
    let {tg} = useTelegram();
    const appService = useMemo(() => new AppService(), []);
    const markupService = useMemo(() => new MarkupService(), []);
    const storageService = useMemo(() => new StorageService(), []);
    const validationService = useMemo(() => new ValidationService(), []);
    const dataSchemesService = useMemo(() => new DataSchemesService(), []);
    
    useEffect(() => {
        tg.ready();
    }, [tg]);

    return (
        <ContextState services={{appService, markupService, storageService, 
            validationService, dataSchemesService,
        }}>
            <Frame>
                <Routes>
                    <Route path={'/crm'} element={<ProtectedRoute><Crm/></ProtectedRoute>}/>

                    <Route path={'/'} element={<Preview/>}/>
                    <Route path={'/sign-in'} element={<SignIn/>}/>
                    <Route path={'/sign-up'} element={<SignUp/>}/>
                </Routes>
            </Frame>
        </ContextState>
    );
};

export default App;