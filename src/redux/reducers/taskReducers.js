const initialTask = {
    task: [],
}


export const taskReducer = (state = initialTask, action) => {
    switch (action.type){
        case 'SET_TASK': 
            return {
                task: action.payload
            }
        case 'SEARCH': 
            return {
                task: action.payload.result
            }
        default:
            return state;
    }
}