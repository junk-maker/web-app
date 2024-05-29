import './App.scss';
import React, {useMemo} from 'react';
import Frame from './hoc/frame/Frame';
import {ContextState} from './context/Context';
import AppService from './services/AppService';
import MarkupService from './services/MarkupService';
import StorageService from './services/StorageService';
import {Route, Routes, Navigate} from 'react-router-dom';
import ValidationService from './services/ValidationService';
import SignIn from './components/presentation/sign-in/SignIn';
import DataSchemesService from './services/DataSchemesService';

const App = () => {
    const appService = useMemo(() => new AppService(), []);
    const markupService = useMemo(() => new MarkupService(), []);
    const storageService = useMemo(() => new StorageService(), []);
    const validationService = useMemo(() => new ValidationService(), []);
    const dataSchemesService = useMemo(() => new DataSchemesService(), []);

    return (
        <ContextState services={{appService, markupService, storageService, 
            validationService, dataSchemesService,
        }}>
            <Frame>
                <Routes>
                    <Route path={'/'} element={<SignIn/>}/>
                </Routes>
            </Frame>
        </ContextState>
    );
};

export default App;