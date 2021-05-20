import {takeEvery, put, call, delay} from 'redux-saga/effects'
import axios from 'axios'
import { fetchSuccess } from '../actions'
import {ToastAndroid} from 'react-native'
function * addTodoAsync(action){
    yield delay(500)
    yield put({type:'ADD_TODO_ASYNC', text:action.text, title:action.title})
}

export function * watchAddTodo(){
    yield takeEvery('ADD_TODO', addTodoAsync)
} 


// export function* watchGetImage(){
//     yield takeEvery()
// }
export function* onFetchPhotos(action) {
    const apiKey = 'afdcacfe332c0b7b0993f9f163a8d445'
    const secret ='57521630eb82052a'
    const per_page = 15
    page = action.page
    keyword = action.keyword.replace(/ /g, '+');

    const photosSearchURL = "https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key="+apiKey+
                "&tags="+keyword+"&per_page="+per_page+"&page="+page+"&format=json&nojsoncallback=1";
    console.log('searching for',keyword+' '+page);

    try{    
        response = yield call(axios.get,photosSearchURL);
        response = response['data']
        const results = response['photos'] 
        const photos = results['photo'] 
        if(photos.length < 1) {
            ToastAndroid.showWithGravity(
                "NO results found!",
                ToastAndroid.SHORT,
                ToastAndroid.CENTER
              );
            return
        }
        
        if(page>1){    
            yield put(fetchSuccess(photos, 'ADD_PHOTOS'))
        }else{
            yield put(fetchSuccess(photos, 'UPDATE_PHOTOS'))

        }

    }catch(e){
        console.error(e)
        if(photos.length < 1) {
            ToastAndroid.showWithGravity(
                "Something went Wrong!",
                ToastAndroid.SHORT,
                ToastAndroid.CENTER
              );
        }
        // yield put(receiveCatFailure(e));
    }
}
  
  export function* fetchPhotosSaga() {
    yield takeEvery('FETCH_PHOTOS', onFetchPhotos);
  }