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
                    <GalleryCard />
                    <GalleryCard />
                    <GalleryCard />
                    <GalleryCard />
                    <GalleryCard />
                    <GalleryCard />
                    <GalleryCard />
                    <GalleryCard />
                    <GalleryCard />
                    <Modal />
                </Flex>
            </>
        )
    }
}

