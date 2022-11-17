import {configureStore} from '@reduxjs/toolkit';

const createStore = configureStore
const CARD_TEXT = ''

// an action is AN OBJECT WITH A TYPE PROPERTY

function createCard() { // an action creator is a function that returns an action
    return {
        type: CARD_TEXT,
        info: "information about the wedding card" // actions describe what happened, but not how the application's state changes
    }
}

// reducers ... (previousState, action) => newState
// app state must be represented by a single object

const initialState = {
    card_text: {
        name: "",
        spouse_name: "",
        description: "",
        wedding_date: "",
        wedding_time: "",
        location: "",
        extra: ""
      }
}


const reducer = (state=initialState, action) => {
    switch(action.type) {
        case CARD_TEXT: return {
            ...state,
            card_text: {} //need the data from the form in CardText.js
        }
    }
}

// remember: reducer function has INITIAL STATE in it via the params
// const store = createStore(reducer);
// const unsubscribe = store.subscribe( () => console.log('Updated state is now:', store.getState()));
// store.dispatch(createCard());
// unsubscribe();
