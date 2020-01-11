import React from 'react';
import { Button, Box, Flex, Image} from '@chakra-ui/core';
import { Link  } from 'react-router-dom';

export default class Header extends React.Component{
    render(){
        return (
            <Flex 
                borderBottom='1px solid #E2E8F0'  
                justifyContent='space-around'  
                alignItems='center'
                bg='white'
            >
                <Image 
                    src={require('../../assets/isa-zen-small.png')}
                    size='75px'
                />
                <nav>
                    <Button borderColor='#000' variant='ghost' marginRight='10px'>
                        <Link to='/gallery'>Gallery</Link>
                    </Button>
                    <Button borderColor='#000' variant='ghost' marginRight='10px'>
                        Contact
                    </Button>
                    <Button borderColor='#000' variant='ghost' marginRight='10px'>
                        Schedule
                    </Button>
                </nav>

            </Flex>
        )
    }
}