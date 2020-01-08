import React from 'react';
import { Button, Box, Flex, Image, Heading} from '@chakra-ui/core';


export default class LeftCard extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <Box w='60%' bg=''>
                <Image
                    w='100%'
                    h='100%'
                    bgSize='contain'
                    src={require(`../../assets/${this.props.imageName}`)}
                />
            </Box>
        )
    }
}

