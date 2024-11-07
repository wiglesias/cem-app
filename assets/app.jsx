// import './bootstrap.js';

import './styles/app.css';

import React  from "react";
import ReactDom from 'react-dom'

function App () {
    return (
        <div>
            <h1>HOla</h1>
        </div>
    )
}

const root = ReactDom.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)
