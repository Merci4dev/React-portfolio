// file principal que inicializa la app. Este esta vinculado al html file atravez del id root
import React from 'react';
import App from './App';
import './index.css'

import {disableReactDevTools} from '@fvilers/disable-react-devtools'

// Usando el createRoot, nuevo en react 18
import { createRoot } from 'react-dom/client';

if(process.env.NODE_ENV === 'production') disableReactDevTools()
const container = document.getElementById('root');
const root = createRoot(container);
root.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
)