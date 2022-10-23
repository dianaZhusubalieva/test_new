import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import PageRouter from './pages/PageRouter';
import { Provider } from 'react-redux';
import store from './redux/store';
import "./main.scss"

function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <PageRouter />
            </BrowserRouter>
        </Provider>
    );
}

export default App;
