// deprecated 

import React from 'react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Button,
    // Lorem,
  } from "@chakra-ui/core"
import { connect } from 'react-redux'
import {imageName} from '../../actions/actions'
const mapStateToProps = state => {
    return {
        imageInfo: state.Gallery.image
    }
}



 function ImageModal(props){
    const {isOpen, onOpen, onClose } = useDisclosure();
    return (
        <>
        <Button onClick={() => {
            onOpen()
            props.dispatch(imageName('hello this is a test'))
            
            }} >Open Modal</Button>

        <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
            <ModalHeader>{props.imageInfo.title}</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
                <p>{props.imageInfo.name}</p>
            </ModalBody>

            <ModalFooter>
            <Button variantColor="blue" mr={3} onClick={onClose}>
                Close
            </Button>
            {/* <Button variant="ghost">Secondary Action</Button> */}
            </ModalFooter>
        </ModalContent>
        </Modal>
        </>
    )
}

export default connect(mapStateToProps)(ImageModal)