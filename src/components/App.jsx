import React from 'react';
import Navbar from './navbar/navbar';
import { HashRouter, Route } from 'react-router-dom'

const App = () => (
    <HashRouter>
        <Route path="/" component={Navbar} />
    </HashRouter>
);

export default App;