import { bindActionCreators } from "redux"
import {TOGGLE_CLICK} from '../actions/actions'

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
        default: 
            return state
    }
}

export default gallery