import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter, Match} from 'react-router';

import App from './App';

import 'normalize.css'
import './index.css';

// this for GitHub page
const repo = `/${window.location.pathname.split('/')[1]}`;

const Root = () => {
    return (
        <BrowserRouter basename={repo}>
            <div>
                <Match exactly pattern="/" component={App} />
            </div>
        </BrowserRouter>
    )
};

render(<Root />, document.getElementById('root'));
