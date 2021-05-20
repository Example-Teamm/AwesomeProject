import {applyMiddleware, compose, createStore} from 'redux'
import rootReducer from '../reducer' 
import { persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage'
import createSagaMiddleware from 'redux-saga'
import {fetchPhotosSaga} from '../sagas/sagas'
// import Reactotron from '../../ReactotronConfig'
const sagaMidddleWare = createSagaMiddleware();
const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    blacklist:['photos']
  };

const persistedReducer = persistReducer(persistConfig,rootReducer)

// export const store = createStore(persistedReducer,compose(applyMiddleware(sagaMidddleWare),Reactotron.createEnhancer()));
export const store = createStore(persistedReducer,applyMiddleware(sagaMidddleWare));
export const persistor = persistStore(store);
sagaMidddleWare.run(fetchPhotosSaga); 
