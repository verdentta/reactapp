import React from 'react';
import './App.css';
import Header from './components/header';
import SiteInfo from './components/main';
import Footer from './components/footer';
import './css/main.css';
import Form from "./Form.js";



function App() {
  return (
    <div className="body">
      <Header />
      <SiteInfo />
      <Footer />
      <Form />
    </div>
    );
}

export default App;
