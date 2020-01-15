import React from 'react'
import { Button } from '@chakra-ui/core'

export default class ZenCard extends React.Component{
    render(){
        return (
            <div className='zen-container'>
                <div className='zen-quote'>
                    <p className='quote'>What's your Zen?</p>
                </div>
                <div className='photo-text'>
                    <img src={require('../../assets/joshua-ness-Vo52cKzOxMY-unsplash.jpg')}></img>
                    <p className='zen-info'>Tokyo, Japan’s busy capital, mixes the ultramodern and the traditional, from neon-lit skyscrapers to historic temples.</p>
                </div>
                <div className='zen-buttons'>
                    <Button 
                        color='#E84044'
                        rightIcon="arrow-back"
                        paddingLeft='0'
                        backgroundColor='white'
                    ></Button>
                    <Button
                        color='#E84044'
                        rightIcon="arrow-forward"
                        paddingLeft='0'
                        backgroundColor='white'
                    ></Button>
                </div>
            </div>
        )
    }
}