import React from 'react';
import ReactDOM from 'react-dom';
import * as NavlinkContentUTIL from './util/navlink_content_util'

import styles from './styles/entry.scss';

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById('root');

    ReactDOM.render(<h1>Test</h1>, root);
});