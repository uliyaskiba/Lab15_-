import React from 'react';
import { Link } from 'react-router-dom';

const Head = () => {
    return (
        <header style={{ position: 'fixed', top: 0, width: '100%', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', backgroundColor: '#f8f8f8', padding: '10px' }}>
            <Link to="/news">Новости</Link>
            <Link to="/about">О проекте</Link>
            <Link to="/contacts">Контакты</Link>
        </header>
    );
};

export default Head;
