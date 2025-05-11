import React from 'react';
import myImage from './../img.png';

const Section = () => {
    return (
        <section style={{ borderRight: '1px solid #ccc', padding: '10px' }}>
            <img src={myImage} alt="Description" style={{ width: '100%' }} />
        </section>
    );
};


export default Section;
