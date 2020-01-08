import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, Box } from '@chakra-ui/core'
import HookForm from './components/form/form';
import Header from './components/Header/Header';
import Card from './components/Card/Card';

function App() {
  return (
    <div className="App">
        <Header />
        <Card imageName='joshua-ness-Vo52cKzOxMY-unsplash.jpg'/>
        {/* <Box>Tomato</Box> */}
        {/* <HookForm /> */}
    </div>
  );
}

export default App;
