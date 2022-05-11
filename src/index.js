import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/modern-normalize/modern-normalize.css';
import { App } from './components/App';
import { ThemeProvider } from 'styled-components';
import { theme } from './common/theme';
import { store, persistor } from './redux/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <PersistGate loading={null} persistor={persistor}>
        <Provider store={store}>
          <App />
        </Provider>
      </PersistGate>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
