import firebase from "firebase";

const firebaseConfig = {
	apiKey: "AIzaSyBlHT9fH7tnZ5sAoY5uerYXG1xMkY4IT04",
	authDomain: "twitter-clone-9f13b.firebaseapp.com",
	databaseURL: "https://twitter-clone-9f13b.firebaseio.com",
	projectId: "twitter-clone-9f13b",
	storageBucket: "twitter-clone-9f13b.appspot.com",
	messagingSenderId: "125357617519",
	appId: "1:125357617519:web:704e079e0b52de0b39b89a",
	measurementId: "G-JT1H77WECV",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
