import React from 'react';
import { Button, Box, Flex, Image, Heading} from '@chakra-ui/core';

export default class GalleryCard extends React.Component{
    render(){
        return (
            <Box 
                border='1px solid #E2E8F0'
                position='relative'
                height='33%'
                width='31%'
                marginTop='4%'
            >
                <Image
                    height='250px'
                    width='100%'
                    src={require('../../assets/jason-briscoe-UV81E0oXXWQ-unsplash.jpg')}
                />

                <Box
                    position='absolute'
                    width='100%'
                    bottom='0'
                    bg='rgba(255,255,255,0.8)'
                >
                    <p>Fugiat commodo anim aliqua Lorem voluptate nulla aliquip sit culpa amet veniam ullamco do.</p>
                </Box>
            </Box>
        )
    }
}