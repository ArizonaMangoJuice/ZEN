import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, Box } from '@chakra-ui/core'
import HookForm from './components/form/form';
import Header from './components/Header/Header';
import Card from './components/Card/Card';
import Gallery from './components/Gallery/Gallery';

function App() {
  return (
    <div className="App">
        <Header />
        <div className='max-width'>
        <Card imageName='joshua-ness-Vo52cKzOxMY-unsplash.jpg'/>
        <Gallery />
        </div>
        {/* <Box>Tomato</Box> */}
        {/* <HookForm /> */}
    </div>
  );
}

export default App;
