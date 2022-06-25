import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { combineReducers,createStore } from 'redux';

// 장바구니 알림 reducer
const basketAlertReducer = (state=true, action) => {
  if (action.type === "닫기") {
    return state = false;
  } else {
    return state;
  }
}

const basketItemInfo = [
  // 예시
  // { id : 0, name : 'Brown Stone', quan : 1, price : 120000},
];


// 장바구니 reducer
const basketReducer = (state = basketItemInfo,action) => {
  switch (action.type) {
    case "항목추가":
      let addBasket = [...state];
      let addFound = state.findIndex((item) => item.id === action.payload.id);
      if (addFound >= 0) {
        addBasket[addFound].quan =  parseInt(addBasket[addFound].quan) + parseInt(action.payload.quan);
      } else {
        addBasket.push(action.payload);
      }
      return addBasket;

    case "항목삭제" : 
      let deleteBasket = [...state];
      let deleteFound = state.findIndex((item) => item.id === action.id);
      deleteBasket.splice(deleteFound, 1);
      return deleteBasket;

    case "수량증가" :
      let addCopy = [...state];
      let addIndex = addCopy.findIndex((item) => { return item.id === action.id })
      addCopy[addIndex].quan++;
      return addCopy;

    case "수량감소" :
      let minusCopy = [...state];
      let minusIndex = minusCopy.findIndex((item) => { return item.id === action.id })
      minusCopy[minusIndex].quan--;
      return minusCopy;

    default :
      return state;
  }
};

// 스토어
const store = createStore(combineReducers({basketReducer,basketAlertReducer}));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App/>
    </Provider>
  </React.StrictMode>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
