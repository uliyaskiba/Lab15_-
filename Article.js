import React from 'react';
import { Route, Routes } from 'react-router-dom';

const Article = () => {
    return (
        <article style={{ padding: '10px' }}>
            <Routes>
                <Route path="/news" element={<><h1>Новости</h1><p>Текст новостей...</p></>} />
                <Route path="/about" element={<h1>Южный федеральный университет</h1>} />
                <Route path="/contacts" element={<p>Номер телефона: +123456789</p>} />
                <Route path="*" element={<h1>404 - Страница не найдена</h1>} />
            </Routes>
        </article>
    );
};

export default Article;
