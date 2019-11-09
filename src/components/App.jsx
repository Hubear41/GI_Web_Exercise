import React from 'react';
import Navbar from './navbar/navbar';
import { BrowserRouter, Route } from 'react-router-dom'

const App = () => (
    <BrowserRouter>
        <Route path="/" component={Navbar} />
    </BrowserRouter>
);

export default App;