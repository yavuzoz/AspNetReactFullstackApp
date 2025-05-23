﻿import React from 'react';               // 🔥 Bunu ekle
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';

const rootElement = document.getElementById('root');
createRoot(rootElement).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
