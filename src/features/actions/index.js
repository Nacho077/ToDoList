export function addToDo(payload){
    return{
        type: "ADD_TODO",
        payload
    }
}

export function completeToDo(payload){
    return{
        type: "COMPLETE_TODO",
        payload
    }
}

export function removeToDo(payload){
    return{
        type: "REMOVE_TODO",
        payload
    }
}