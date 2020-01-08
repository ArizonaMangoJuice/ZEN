import React from 'react';
import { Button, Box, Flex, Image, Heading} from '@chakra-ui/core';


export default class RightCard extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <Flex
                    w='40%'
                    bg='#fff'
                    borderBottom='1px solid #E2E8F0'  
                    borderRight='1px solid #E2E8F0'  
                    borderTop='1px solid #E2E8F0'  
                    flexDirection='column'
                    justifyContent='space-around'

            >
                <Heading 
                    size='md'
                    maxWidth='90%'
                    textAlign='left'
                    paddingLeft='5%'
                >
                Qui esse culpa in laborum sint magna minim occaecat in exercitation.
                </Heading>
                <p className='card-p'>
                Non voluptate in ex ut sit labore. Sint magna ipsum tempor nulla reprehenderit laboris ad. Do elit dolor do id minim consectetur amet laboris ex nisi proident. Ea adipisicing exercitation consequat elit esse deserunt mollit nulla amet minim sint nostrud reprehenderit.
                </p>
            </Flex>
        )
    }
}

