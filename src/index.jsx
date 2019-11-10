import React from 'react';
import ReactDOM from 'react-dom';
import styles from './styles/entry.scss';
import imageIndex from './util/image_index';
import App from './components/App';


document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById('root');
    console.log(imageIndex); 
    ReactDOM.render(<App />, root);
});