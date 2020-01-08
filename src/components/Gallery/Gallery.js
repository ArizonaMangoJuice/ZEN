import React from 'react';
import { Button, Box, Flex, Image, Heading} from '@chakra-ui/core';
import GalleryCard from '../galleryCard/GalleryCard';

export default class Gallery extends React.Component{
    constructor(props){
        super(props)
        let state = {}
    }

    render(){
        return (
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

            </Flex>
        )
    }
}