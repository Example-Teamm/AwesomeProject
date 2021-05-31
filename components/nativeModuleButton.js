import React from 'react';
import { NativeModules, Button } from 'react-native';

const { CalendarModule } = NativeModules;

const NewModuleButton = () => {
  const onPress = () => {
    console.log('We will invoke the native module here!');
    CalendarModule.createCalendarEvent('testName', 'testLocation');
    // const callback = (info) => console.log(info) 
    CalendarModule.getDeviceMemoryInformation((error, response) => {
        if (!error)  console.log(response)
        else console.log(error)        
      });
  };

  return (
    <Button
      title="Click to invoke your native module!"
      color="#841584"
      onPress={onPress}
    />
  );
};

export default NewModuleButton;