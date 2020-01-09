import React from 'react';
import { Button, Box, Flex, Image, Heading, Divider} from '@chakra-ui/core';
import GalleryCard from '../galleryCard/GalleryCard';
import Modal from '../Modal/Modal';



 export default class Gallery extends React.Component{
    constructor(props){
        super(props)
        let state = {}
    }

    render(){
        return (
            <>
                <Box
                    marginTop='4%'
                >
                    <Divider borderColor='#E2E8F0'/>
                    <Heading 
                        as='h2'
                    >
                        Gallery
                    </Heading>
                    <Divider borderColor='#E2E8F0'/>

                </Box>
                <Flex 
                    display='flex' 
                    flexDirection='row' 
                    flexWrap='wrap' 
                    justifyContent='space-between'
                >
                    <GalleryCard imageSource={'jason-briscoe-AQl-J19ocWE-unsplash.jpg'}/>
                    <GalleryCard imageSource={'jason-briscoe-UV81E0oXXWQ-unsplash.jpg'}/>
                    <GalleryCard imageSource={'joshua-ness-Vo52cKzOxMY-unsplash.jpg'}/>
                    <GalleryCard imageSource={'michael-browning-t6H2vqVPq7E-unsplash.jpg'}/>
                    <GalleryCard imageSource={'joshua-ness-Vo52cKzOxMY-unsplash.jpg'}/>
                    <GalleryCard imageSource={'jason-briscoe-UV81E0oXXWQ-unsplash.jpg'}/>
                    <GalleryCard imageSource={'jason-briscoe-UV81E0oXXWQ-unsplash.jpg'}/>
                    <GalleryCard imageSource={'jason-briscoe-UV81E0oXXWQ-unsplash.jpg'}/>
                    <GalleryCard imageSource={'jason-briscoe-UV81E0oXXWQ-unsplash.jpg'}/>
                    {/* <Modal /> */}
                </Flex>
            </>
        )
    }
}

