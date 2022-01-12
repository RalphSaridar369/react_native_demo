import * as Font from 'expo-font';
import React from 'react'

export default useFonts = async () =>
  await Font.loadAsync({
    'OpenSans-Bold': require('./OpenSans-Bold.ttf'),
    'OpenSans-Italic': require('./OpenSans-Italic.ttf'),
    'OpenSans-Medium': require('./OpenSans-Medium.ttf'),
    'OpenSans-Regular': require('./OpenSans-Regular.ttf'),
    'ProximaNova-Light':require('./ProximaNova-Light.ttf'),
  });