/**
 * @format
 */
import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import RouterTab from './src/RouterTab';
// import App from './App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => RouterTab);
