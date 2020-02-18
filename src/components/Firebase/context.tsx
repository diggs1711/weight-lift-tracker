import React from 'react'
import Firebase from './firebase'

const FirebaseContext = React.createContext<null | Firebase>(null)

export const withFirebase = (Component: React.FC) => (props: any) => (
	<FirebaseContext.Consumer>
		{(firebase) => <Component {...props} firebase={firebase} />}
	</FirebaseContext.Consumer>
)

export default FirebaseContext
