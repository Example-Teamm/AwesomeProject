export const addTodo = (title, text) => ({
    type: 'ADD_TODO',
    title: title,
    text: text
})

export const updateTodo = (title, text, id) => ({
    type: 'UPDATE_TODO',
    title: title,
    text: text,
    id: id
})

export const deleteTodo = (id) => ({
    type: 'DELETE_TODO',
    id: id
})