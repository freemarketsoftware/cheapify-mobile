import { registerRootComponent } from 'expo';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import App from './App';

window.ENDPOINT_URL = 'http://localhost:3000'




// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(App);
