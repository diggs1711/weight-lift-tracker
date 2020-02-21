import React, { useState, useEffect } from 'react'
import GraphqlClient from '../graphql/client'
import Exercises from '../Exercises/Exercises'
import Workouts from '../Workouts/Workouts'
import AddWorkout from '../AddWorkout/AddWorkout'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import Navigation from '../Navigation/Navigation'
import { SignIn } from '../SignIn/SignIn'
import { withAuthentication } from '../Session'
import Account from '../Account/Account'
import DashBoard, { Workout } from '../Dashboard/DashBoard'
import useFirebase from '../../hooks/use-firebase'

const App: React.FC = () => {
	const firebase = useFirebase()
	const [workouts, setWorkouts] = useState<Workout[]>([])

	useEffect(() => {
		firebase?.getWorkouts().then(snapshot => {
			snapshot.forEach(doc => {
				const workout = doc.data() as Workout
				setWorkouts(workouts => ([...workouts, workout ]))
			});
		})
	}, [firebase])

	return (
		<GraphqlClient>
			<Router>
				<div>
					<Navigation />
					<Switch>
						<Route path="/" exact>
							<DashBoard workouts={workouts} />
						</Route>
						<Route path="/exercises">
							<Exercises />
						</Route>
						<Route path="/workouts">
							<Workouts />
						</Route>
						<Route path="/addWorkout">
							<AddWorkout />
						</Route>
						<Route path="/signIn">
							<SignIn />
						</Route>
						<Route path={'/Account'}>
							<Account />
						</Route>
					</Switch>
				</div>
			</Router>
		</GraphqlClient>
	)
}

export default withAuthentication(App)
