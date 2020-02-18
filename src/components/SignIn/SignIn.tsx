import React from 'react'
import useFirebase from '../../hooks/use-firebase'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'

export const SignIn = () => {
	const firebase = useFirebase()
	if (!firebase) return <div>Error...</div>

	const config = {
		signInOptions: [
			firebase.emailAuthProvider.PROVIDER_ID,
			firebase.googleProvider.providerId
		],
		signInFlow: 'popup',
		signInSuccessUrl: '/'
	}

	return <StyledFirebaseAuth uiConfig={config} firebaseAuth={firebase.auth} />
}

export default SignIn
