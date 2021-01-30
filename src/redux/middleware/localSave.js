
const localSave = store => next => action => {
    next(action);
    localStorage.setItem("assignments", JSON.stringify(store.getState()));
}


export default localSave;