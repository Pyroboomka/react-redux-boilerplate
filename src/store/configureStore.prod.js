import { createStore, applyMiddleware, compose } from 'redux';
import { rootReducer } from '../reducers/rootReducer';

export function configureStore(preLoadedState) {
    const store = createStore(
        rootReducer,
        preLoadedState,
        compose()
    );
    return store;
}
