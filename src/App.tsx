import React from 'react'
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
import DashBoard from './components/Dashboard/DashBoard'

const App: React.FC = () => {
	const exercises = [
		{
			name: 'Bench Press',
			weight: 80
		}
	]

	return (
		<GraphqlClient>
			<Router>
				<div>
					<Navigation />
					<Switch>
						<Route path="/" exact>
							<DashBoard workouts={[ { exercises, date: '' } ]} />
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
