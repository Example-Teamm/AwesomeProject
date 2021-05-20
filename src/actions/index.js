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

const FETCH_PHOTOS = 'FETCH_PHOTOS';
const FETCH_SUCCESS = 'FETCH_SUCCESS';
const FETCH_FAILURE = 'FETCH_FAILURE';

export const fetchPhotos = (keyword, page) => {
    console.log(keyword,page)
    return {type: FETCH_PHOTOS,
    keyword: keyword,
    page: page};
}
  
  export const fetchSuccess = (data, type) => ({
    type: type,
    photos: data,
  });
  
  export const fetchfailure = (error) => ({
    type: FETCH_FAILURE,
    error,
  });