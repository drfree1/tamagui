// @ts-ignore
// let reactNative = require_ReactNative()

console.log('what is', require('react-native'))

import { AppRegistry, View } from 'react-native'

AppRegistry.registerComponent('main', () => Root)

export default function Root() {
  return (
    <>
      <View style={{ backgroundColor: 'red', width: 100, height: 100 }} />
    </>
  )
}
