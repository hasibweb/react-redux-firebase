import { composeWithDevTools } from "redux-devtools-extension";

import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore"; // <- needed if using firestore
// import 'firebase/functions' // <- needed if using httpsCallable
import { createStore, combineReducers } from "redux";
import { firebaseReducer } from "react-redux-firebase";
import { createFirestoreInstance, firestoreReducer } from "redux-firestore"; // <- needed if using firestore

const fbConfig = {
  apiKey: "AIzaSyCr3opZGNL0vMMYPfE19B37zAtJwHUM0Rg",
  authDomain: "test-app-b5fdf.firebaseapp.com",
  databaseURL: "https://test-app-b5fdf.firebaseio.com",
  projectId: "test-app-b5fdf",
  storageBucket: "test-app-b5fdf.appspot.com",
  messagingSenderId: "1050319552683",
  appId: "1:1050319552683:web:404b9f1c24e0f6957877ee",
  measurementId: "G-32BFTQJBC4"
};

// react-redux-firebase config
const rrfConfig = {
  userProfile: "users",
  useFirestoreForProfile: true // Firestore for Profile instead of Realtime DB
};

// Initialize firebase instance
firebase.initializeApp(fbConfig);

// Initialize other services on firebase instance
firebase.firestore(); // <- needed if using firestore
// firebase.functions() // <- needed if using httpsCallable

// Add firebase to reducers
const rootReducer = combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer // <- needed if using firestore
});

// Create store with reducers and initial state
const initialState = {};
const store = createStore(rootReducer, initialState, composeWithDevTools());

const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance // <- needed if using firestore
};

export { store, rrfProps };
