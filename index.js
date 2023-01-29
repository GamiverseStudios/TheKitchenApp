/**
 * @format
 */
import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import { firebase } from '@react-native-firebase/app-check';

const appCheck = firebase.appCheck();
appCheck.activate(
    '6Ld3lSckAAAAAF1sm5FSM_HgIaJO_3uFQJHU5oAM', true);  

AppRegistry.registerComponent(appName, () => App);
