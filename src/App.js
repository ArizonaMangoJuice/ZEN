import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, Box } from '@chakra-ui/core'
import HookForm from './components/form/form';
import Header from './components/Header/Header';
import Card from './components/Card/Card';
import Gallery from './components/Gallery/Gallery';
import Home from './components/Home/Home'
import { connect } from 'react-redux'
import {
  Switch,
  Route, 
  Link
} from 'react-router-dom'


import {toggleClick} from './actions/actions'
import Calendar from './components/Calendar/Calendar';
import LandingPage from './components/LandingPage/LandingPage';

const mapStateToProps = state => {
  return {
    gallery: state.Gallery.image,
    isImageClicked: state.Gallery.clicked
  }
}

function App(props) {
  console.log(props)
  return (
    <div className="App">
        <Header />
        <div className='max-width'>
        {/* <Card imageName='joshua-ness-Vo52cKzOxMY-unsplash.jpg'/> */}
        <Route exact path='/gallery' component={Gallery}/>
        <Route exact path='/' component={LandingPage}/>
        <Route exact path='/schedule' component={Calendar}/>

        {/* <Route exact path='/schedule' component={}/>  schedule will go herew*/}



        {/* <Gallery /> */}
        {/* <p>{props.isImageClicked} hello</p> */}
        {/* <Button 
          onClick={() => props.dispatch(toggleClick())}
        >press this Button</Button> */}
        </div>
        {/* <video className='video-background' autoPlay loop muted>
          <source src={require('./assets/LandingVideo.mp4')} type='video/mp4' />
        </video> */}
        {/* <Box>Tomato</Box> */}
        {/* <HookForm /> */}
    </div>
  );
}

export default connect(mapStateToProps)(App);
