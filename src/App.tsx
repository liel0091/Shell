import React, { Component } from 'react';
import { GlobalStyle } from './utils/global.styled';
import { Image } from './App.styled';
import { routs } from './App.data';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Content, NavItem, Footer } from './components';
import shell from './images/shell.png';

export default class App extends Component {
    render() {
        return (
            <Router>
                <GlobalStyle />
                <NavItem list={routs} img={shell} />
                <Image>
                    <img alt="Shell" src={shell} />
                </Image>
                <Routes>
                    <Route index element={<Content title="THE SHELL" />} />
                    <Route
                        path="/about"
                        element={
                            <Content
                                title="About"
                                desc="This app has all configurations you need to build a modern web application. You just need to add components and customize it as you see fit."
                            />
                        }
                    />
                </Routes>
                <Footer />
            </Router>
        );
    }
}
