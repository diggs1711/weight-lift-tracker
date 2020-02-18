import React, { useState, useEffect } from 'react'
import './App.css'
import GraphqlClient from './graphql/client'
import Exercises from './components/Exercises/Exercises'
import Workouts from './components/Workouts/Workouts'
import AddWorkout from './components/AddWorkout/AddWorkout'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import Navigation from './components/Navigation/Navigation'
import { SignIn } from './components/SignIn/SignIn'
import { withAuthentication } from './components/Session'
import Account from './components/Account/Account'
import DashBoard, { Workout } from './components/Dashboard/DashBoard'
import useFirebase from './hooks/use-firebase'

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
