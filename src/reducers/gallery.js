import { bindActionCreators } from "redux"
import {TOGGLE_CLICK, IMAGE_NAME} from '../actions/actions'

let initialState = {
    clicked: false,
    image: {}
}

const gallery = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_CLICK:
            return {
                ...state,
                clicked: !state.clicked
            }
        case IMAGE_NAME:
            return {
                ...state,
                image: {
                    ...state.image,
                    name: action.name,
                    title: Math.random()
                }
            }
        default: 
            return state
    }
}

export default gallery