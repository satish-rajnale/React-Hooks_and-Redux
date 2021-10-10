import { Todo, getTodos} from "./api";
import { createStore, applyMiddleware } from "redux";
import { put, takeEvery } from "redux-saga/effects";
import createSagaMiddleware from "@redux-saga/core";

function* getTododsAction(){
    const todos: Todo[] = yield getTodos();
    yield put({type: "TODO_FETCH_SCCEEDED", payload: todos});
};

function* rootSaga(){
    yield takeEvery("TODO_FETCH_SCCEEDED", getTododsAction);
}


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

const sagaMiddleware = createSagaMiddleware();
export const store = createStore(reducer, applyMiddleware(sagaMiddleware));


sagaMiddleware.run(rootSaga);