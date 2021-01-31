
const localSave = store => next => action => {
    next(action);
    localStorage.setItem("assignments", JSON.stringify(store.getState().assignments));
}


export default localSave;