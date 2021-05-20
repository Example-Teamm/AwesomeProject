// import Reactotron from 'reactotron-react-native'
// import AsyncStorage from '@react-native-async-storage/async-storage'
// import { reactotronRedux } from 'reactotron-redux'

// const reactotron = Reactotron
// .setAsyncStorageHandler(AsyncStorage) // AsyncStorage would either come from `react-native` or `@react-native-community/async-storage` depending on where you get it from
//   .configure() // controls connection & communication settings
//   .
//   .useReactNative() // add all built-in react native plugins
//   .connect() // let's connect!
  

// export default reactotron

import Reactotron from 'reactotron-react-native';
import { reactotronRedux } from 'reactotron-redux';
import sagaPlugin from 'reactotron-redux-saga';

console.disableYellowBox = true;
// First, set some configuration settings on how to connect to the app
const reactotron = Reactotron.configure({
  name: 'Foxy-App',
  host: '192.168.43.150',
})
  .useReactNative({
    asyncStorage: false, // there are more options to the async storage.
    networking: {
      // optionally, you can turn it off with false.
      ignoreUrls: /symbolicate/,
    },
    editor: false, // there are more options to editor
    errors: { veto: (stackFrame) => false }, // or turn it off with false
    overlay: false, // just turning off overlay
  })
  .use(reactotronRedux())
  .connect();

// add some more plugins for redux & redux-saga
Reactotron.use(sagaPlugin());

/** Do Nothing. */
const noop = () => undefined;

// in dev, we attach Reactotron, in prod we attach a interface-compatible mock.
if (__DEV__) {
  console.tron = reactotron; // attach reactotron to `console.tron`
} else {
  // attach a mock so if things sneaky by our __DEV__ guards, we won't crash.
  console.tron = {
    configure: noop,
    connect: noop,
    use: noop,
    useReactNative: noop,
    clear: noop,
    log: noop,
    logImportant: noop,
    display: noop,
    error: noop,
  };
}

export default reactotron;
