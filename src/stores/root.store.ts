// src/stores/root.store.ts

import { createStore } from 'redux';

// it's a TypeScript, so we need to create a type for our root state
export interface RootState {
    title: string;
}

// Also, we should have some default / initial state of our app,
// because Redux will call our reducer at first, for initializing state
const initialState: RootState = { title: 'React + Redux App' };

// action object type, with only one, required field
interface RootAction {
    type: string;
}

// Redux will call our reducer for initializing the default state, without state argument,
// so we can use function's default argument initialization
function reducer(state: RootState = initialState, action: RootAction): RootState {
    switch (action.type) {
        case 'REMOVE_TITLE':
            return { title: '' };
        case 'SHOW_TITLE':
            return { title: 'React + Redux App' };
        default:
            return state;
    }
}

const store = createStore(reducer);
export { store };