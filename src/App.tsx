import React from 'react'
import './App.css'
import GraphqlClient from './graphql/client'
import Exercises from './components/Exercises'
import Workouts from './components/Workouts'
import AddWorkout from './components/AddWorkout'
import { Switch, Route, BrowserRouter as Router, Link } from 'react-router-dom'
import Navigation from './components/Navigation'

const App: React.FC = () => {
	return (
		<GraphqlClient>
			<Router>
				<div>
					<Navigation />
					<Switch>
						<Route path="/" exact>
							<div>Hello</div>
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
					</Switch>
				</div>
			</Router>
		</GraphqlClient>
	)
}

export default App
