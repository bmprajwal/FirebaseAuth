import firebase from "firebase/compat/app";
import "firebase/compat/auth";

export const config = {
	// apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
	apiKey: "AIzaSyAO0hKtLEP-GT6n46R8U65VdnhwyR1I68A",
	authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
	projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
	storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
	messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
	appId: process.env.REACT_APP_FIREBASE_APP_ID,
};
const app = firebase.initializeApp(config);

export const auth = app.auth();
export default app;
