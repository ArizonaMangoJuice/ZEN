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
            <Flex  height='350px' maxWidth='900px' margin='auto' marginTop='50px'>
                <LeftCard imageName={this.props.imageName} />
                <RightCard />
            </Flex>
        )
    }
}

