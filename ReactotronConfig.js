import Reactotron from 'reactotron-react-native'
Reactotron
// .configure()
.configure({ host: '127.0.0.1' })
.useReactNative() // add all built-in react native plugins
  .connect() // let's connect!