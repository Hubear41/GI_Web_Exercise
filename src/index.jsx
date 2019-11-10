import React from 'react';
import ReactDOM from 'react-dom';
import styles from './styles/entry.scss';
import App from './components/App';


document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById('root');

    ReactDOM.render(<App />, root);
});