import './App.css';
import { Route, Switch } from "react-router-dom";
import Rough from './components/Rough';
import Header from './components/Header';
import Home from './components/Home';
import Checkout from './components/Checkout';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js';
import firebase from 'firebase/compat/app';
import Login from './components/Login';

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: "AIzaSyBa1bML8sN6C75HTftmBdnUOjxzodsdly4",
    authDomain: "clone-asadbukhari886-amazo0.firebaseapp.com",
    projectId: "clone-asadbukhari886-amazo0",
    storageBucket: "clone-asadbukhari886-amazo0.appspot.com",
    messagingSenderId: "437958731772",
    appId: "1:437958731772:web:5fcaa4b3b7e90b15a63479"
  });
} else {
  firebase.app(); // if already initialized, use that one
}



function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Header />
          <Home />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/checkout">
          <Checkout />

        </Route>
        <Route path="/khansir">
          <h1>this is khansir</h1>
        </Route>

      </Switch>
    </div>
  );
}

export default App;
