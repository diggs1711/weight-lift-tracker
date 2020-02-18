import app from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'
const firebaseui = require('firebaseui');

const config = {
	apiKey: process.env.REACT_APP_API_KEY,
	authDomain: process.env.REACT_APP_AUTH_DOMAIN,
	databaseURL: process.env.REACT_APP_DATABASE_URL,
	projectId: process.env.REACT_APP_PROJECT_ID,
	storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
	messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID
}

class Firebase {
	serverValue: typeof app.database.ServerValue
	emailAuthProvider: typeof app.auth.EmailAuthProvider
	auth: app.auth.Auth
	db: app.database.Database
	googleProvider: app.auth.GoogleAuthProvider
	ui: firebaseui.auth.AuthUI
	app: app.app.App

	constructor() {
		this.app = app.initializeApp(config)

		this.serverValue = app.database.ServerValue
		this.emailAuthProvider = app.auth.EmailAuthProvider

		this.auth = app.auth()
		this.db = app.database()
		this.ui = new firebaseui.auth.AuthUI(this.auth);
		this.googleProvider = new app.auth.GoogleAuthProvider()
	}

	currentUser = () => this.app.auth().currentUser;

	doCreateUserWithEmailAndPassword = (email: string, password: string) =>
		this.auth.createUserWithEmailAndPassword(email, password)

	doSignInWithEmailAndPassword = (email: string, password: string) =>
		this.auth.signInWithEmailAndPassword(email, password)

	doSignInWithGoogle = () => this.auth.signInWithPopup(this.googleProvider)

	doSignOut = () => this.auth.signOut()

	onAuthUserListener = (next: (v: any) => void, fallback: () => void) => {
		this.auth.onAuthStateChanged((authUser) => {
			if (authUser) {
				// this.user(authUser.uid).once('value').then((snapshot) => {
				// 	const dbUser = snapshot.val()

				// 	if (!dbUser.roles) {
				// 		dbUser.roles = {}
				// 	}

				// 	authUser = {
				// 		uid: authUser?.uid,
				// 		email: authUser?.email,
				// 		emailVerified: authUser?.emailVerified,
				// 		providerData: authUser?.providerData,
				// 		...dbUser
				// 	}

				// 	next(authUser)
				// })
			} else {
				fallback()
			}
		})
	}

	// user = (id: string) => this.db.ref(`users/${id}`)
}

export default Firebase;