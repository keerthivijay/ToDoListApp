import firebase from 'firebase';

  var firebaseConfig = {
    apiKey: "AIzaSyCroOlhXHWE_4moYl1OOSDMsYX2DkwaLhM",
    authDomain: "todo-list-53f5c.firebaseapp.com",
    databaseURL: "https://todo-list-53f5c.firebaseio.com",
    projectId: "todo-list-53f5c",
    storageBucket: "todo-list-53f5c.appspot.com",
    messagingSenderId: "1057003931463",
    appId: "1:1057003931463:web:ad9a72050e9587132f6e62"
  };
  // Initialize Firebase
  let firebaseDB = firebase.initializeApp(firebaseConfig);

  export default firebaseDB.database().ref();