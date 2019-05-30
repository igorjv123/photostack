import defaultState from "./defaultState";


export default function defaultTagsReducer(state = defaultState.tags, action) { 
    switch (action.type) {
        default: {
            return state;
        }
    }
}