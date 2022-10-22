// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getAnalytics } from "firebase/analytics"
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyBlaF3Nt8dOiD1DC7Ou4yNbj45pb4eBzME",
	authDomain: "electriphy-portal.firebaseapp.com",
	projectId: "electriphy-portal",
	storageBucket: "electriphy-portal.appspot.com",
	messagingSenderId: "686368356297",
	appId: "1:686368356297:web:342c6ad4e989076c0c9a18",
	measurementId: "G-E2XP2BYNVT",
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
// export const database = {
// 	users: db.collection("users"),
// 	posts: db.collection("posts"),
// 	comments: db.collection("comments"),
// 	getTimeStamp: db.firestore.FieldValue.serverTimestamp,
// }

export const storage = getStorage(app)

export { db }
