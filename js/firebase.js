var fireBase = fireBase || firebase;
var hasInit = false;
var config = {
    apiKey: "AIzaSyAlfE_5JdS0n7tAMGF8ZBEVNdJUD7bO4_I",
  authDomain: "nine-day-s-wonder.firebaseapp.com",
  databaseURL: "https://nine-day-s-wonder-default-rtdb.firebaseio.com",
  projectId: "nine-day-s-wonder",
  storageBucket: "nine-day-s-wonder.appspot.com",
  messagingSenderId: "606717023956",
  appId: "1:606717023956:web:1dbedc2d625f6175d70d41",
  measurementId: "G-1F5CKF30HP"
    
  };
if(!hasInit){
    firebase.initializeApp(config);
    hasInit = true;
}
