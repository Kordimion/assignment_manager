import { applyMiddleware } from 'redux';

const localSave = store => next => action => {
    
    console.log("state changed");
    //localStorage.setItem("assignments", JSON.stringify(store.getState()));
    next(action);
}

export default applyMiddleware(localSave);