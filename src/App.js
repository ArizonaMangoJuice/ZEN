import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, Box } from '@chakra-ui/core'
import HookForm from './components/form/form';
import Header from './components/Header/Header';
import Card from './components/Card/Card';
import Gallery from './components/Gallery/Gallery';
import { connect } from 'react-redux'

import {toggleClick} from './actions/actions'

const mapStateToProps = state => {
  return {
    gallery: state.Gallery.image,
    image: state.Gallery.clicked
  }
}

function App(props) {
  console.log(props)
  return (
    <div className="App">
        <Header />
        <div className='max-width'>
        <Card imageName='joshua-ness-Vo52cKzOxMY-unsplash.jpg'/>
        <Gallery />
        <p>{props.image} hello</p>
        <Button 
          onClick={() => props.dispatch(toggleClick())}
        >press this Button</Button>
        </div>
        {/* <Box>Tomato</Box> */}
        {/* <HookForm /> */}
    </div>
  );
}

export default connect(mapStateToProps)(App);
