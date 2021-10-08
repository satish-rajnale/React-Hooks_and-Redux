import { Todo } from "./api";
import { createStore } from "redux";
const reducer = (
    state: Todo[] = [],
    action: { type: "TODO_FETCH_SCCEEDED"; payload: Todo[]}
) => {
    switch(action.type){
        case "TODO_FETCH_SCCEEDED":
            return action.payload;
        default:
            return state;
    }
};

export const store = createStore(reducer);