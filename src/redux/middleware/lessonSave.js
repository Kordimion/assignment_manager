const lessonSave = store => next => action => {
    next(action);
    localStorage.setItem("lessons", JSON.stringify(store.getState().lessons));
}


export default lessonSave;