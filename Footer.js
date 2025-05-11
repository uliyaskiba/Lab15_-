import React from 'react';

const Footer = () => {
    return (
        <footer style={{ position: 'fixed', bottom: 0, width: '100%', backgroundColor: '#f8f8f8', padding: '10px', textAlign: 'center' }}>
            <p>Сайт создан: {new Date().toLocaleDateString()}</p>
            <p>Автор: Скиба Юлия Александровна</p>
        </footer>
    );
};

export default Footer;
