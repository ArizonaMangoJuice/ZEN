import React from 'react';
import { 
    Button, 
    Box, 
    Flex, 
    Image, 
    Heading,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
} from '@chakra-ui/core';

import { connect } from 'react-redux'

import {imageName} from '../../actions/actions'

const mapStateToProps = state => {
    return {
        imageInfo: state.Gallery.image,
        isImageClicked: state.Gallery.clicked
    }
}

function GalleryCard (props){
        const {isOpen, onOpen, onClose } = useDisclosure();

        return (
            <Box 
                border='1px solid #E2E8F0'
                position='relative'
                height='33%'
                width='31%'
                marginTop='4%'
                as='button'
                onClick={() => {
                    onOpen()
                    props.dispatch(imageName('hello this is a test'))
                }}
            >
                <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
                    <ModalOverlay />
                    <ModalContent>
                        <ModalHeader>{props.imageInfo.title}</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody>
                            <p>{props.imageInfo.name}</p>
                            <Image
                                height='512px'
                                max-width='512px'
                                src={require('../../assets/jason-briscoe-UV81E0oXXWQ-unsplash.jpg')}
                            />
                        </ModalBody>

                        <ModalFooter>
                        <Button variantColor="blue" mr={3} onClick={onClose}>
                            Close
                        </Button>
                        {/* <Button variant="ghost">Secondary Action</Button> */}
                        </ModalFooter>
                    </ModalContent>
                </Modal>
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

export default connect(mapStateToProps)(GalleryCard)