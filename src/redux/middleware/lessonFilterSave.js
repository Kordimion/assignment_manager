const localSave = store => next => action => {
    next(action);
    sessionStorage.setItem("currentLesson", store.getState().currentLesson);
}


export default localSave;