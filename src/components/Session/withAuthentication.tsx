import React, { useEffect, useState, useContext } from 'react'
import useFirebase from '../../hooks/use-firebase'
import { AuthUserContext } from '.'

const withAuthentication = (Component: any) => () => {
	const val = localStorage.getItem('authUser');
	const [authUser, setAuthUser] = useState(val && val !== '' ? JSON.parse(val) : null);
	const firebase = useFirebase()

	if (!firebase) return <div>Error</div>

	useEffect(() => {
		firebase.app.auth().onAuthStateChanged(
			(authUser) => {
				localStorage.setItem('authUser', JSON.stringify(authUser))
				setAuthUser(authUser)
			},
			() => {
				localStorage.removeItem('authUser')
				setAuthUser(null)
			}
		)

		return () => {}
	}, [firebase])

	return (
		<AuthUserContext.Provider value={authUser}>
			<Component />
		</AuthUserContext.Provider>
	)
}

export default withAuthentication
