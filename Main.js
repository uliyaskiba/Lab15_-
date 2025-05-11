import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Section from './Section';
import Article from './Article';
import Aside from './Aside';

const Main = () => {
    return (
        <main style={{ display: 'grid', gridTemplateColumns: '1fr 3fr 1fr', marginTop: '50px', marginBottom: '50px' }}>
            <Section />
            <Article />
            <Aside />
        </main>
    );
};

export default Main;
