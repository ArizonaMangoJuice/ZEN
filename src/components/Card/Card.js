import React from 'react';
import { Button, Box, Flex, Image, Heading} from '@chakra-ui/core';
import LeftCard from '../LeftCard/LeftCard';
import RightCard from '../RightCard/RightCard';

export default class Card extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        console.log(this.props)
        return (
            <Flex 
                position='relative'  
                height='350px' 
                maxWidth='900px' 
                margin='auto' 
                marginTop='50px'
                bg='white'    
            >
                <Button
                    position='absolute'
                    top='150px'
                    left='0px'
                    rightIcon="arrow-back"
                    paddingLeft='0'
                    paddingRight='0.8rem'
                >
                </Button>
                <LeftCard imageName={'joshua-ness-Vo52cKzOxMY-unsplash.jpg'} />
                <RightCard />
                <Button
                    position='absolute'
                    top='150px'
                    right='0px'
                    rightIcon="arrow-forward"
                    paddingLeft='0'
                    paddingRight='0.8rem'
                >
                </Button>
            </Flex>
        )
    }
}

