import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import store from './redux/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>   {/* Provider: store을 앱에 적용시키는 컴포넌트*/}
    <BrowserRouter>       {/* 브라우저를 라우팅 가능하게 해주는 컴포넌트 */}
      <App />
    </BrowserRouter>
  </Provider>
);

reportWebVitals();
