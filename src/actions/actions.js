// action types
export const ADD_TODO = 'ADD_TODO'
export const TOGGLE_TODO = 'TOGGLE_TODO'
export const SET_VISISBILITY_FILTER = 'SET_VISIBILITY_FILTER'
export const TOGGLE_CLICK = 'TOGGLE_CLICK'
// other constants 

export const toggleClick = () => ({
    type: TOGGLE_CLICK
})

export const VisibilityFilters = {
    SHOW_ALL:'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_Active'
}

// action creators the function that gets sent to the reducer

export function addTodo(text){
    return {
        type: ADD_TODO,
        text
    }
}

export function toggleTodo(index){
    return {
        type: TOGGLE_TODO,
        index
    }
}

export function setVisibilityFilter(filter){
    return {
        type: SET_VISISBILITY_FILTER,
        filter
    }
}