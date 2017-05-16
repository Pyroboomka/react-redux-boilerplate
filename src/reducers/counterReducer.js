import { INCREMENT, DECREMENT } from '../actions/actions';

function counter(state = {}, action) {
    switch (action.type) {
        case INCREMENT:
            return Object.assign({}, state, {
                number: state.number + 1
            })
        case DECREMENT:
            return Object.assign({}, state, {
                number: state.number - 1
            })
        default: return state
    }
}

export default counter