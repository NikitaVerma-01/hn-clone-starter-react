import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import './App.css';
import Root from './components/root/root';
import 'bootstrap/dist/css/bootstrap.min.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

function App() {
  return (
    <Provider store={store}>
        <div className = "App">
          <MuiThemeProvider>
            <Root/>
          </MuiThemeProvider>
        </div>
    </Provider>
  );
}

export default App;
