import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Head from './components/Head';
import Main from './components/Main';
import Footer from './components/Footer';

function App() {
  return (
      <Router>
        <div style={{ display: 'grid', gridTemplateRows: 'auto 1fr auto', minHeight: '100vh' }}>
          <Head />
          <Main />
          <Footer />
        </div>
      </Router>
  );
}

export default App;
