export const createTodo = (content) => {
    return {
        type: "CREATE_TODO",
        content: content
    }
}

export const complete = (id) => {
    return {
        type: "COMPLETE_TODO",
        id: id
    }
}

export const undo = (id) => {
    return {
        type: "UNDO_TODO",
        id: id
    }
}

export const remove = (id) => {
    return {
        type: "REMOVE_TODO",
        id: id
    }
}