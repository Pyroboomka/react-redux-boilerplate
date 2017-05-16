import { createStore, compose } from 'redux';
import { rootReducer } from '../reducers/rootReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export function configureStore(preLoadedState) {
    const store = createStore(
        rootReducer,
        preLoadedState,
        composeEnhancers()
    );
    return store;
}
