import { gql } from 'apollo-server-cloud-functions'

const Workout = gql`
	extend type Query {
		Workouts: [Workout!]
	}

	type Workout {
		date: String
		name: String
		exercises: [Exercise!]
	}

	type Exercise {
		name: String
		weight: Int
		repitions: Int
	}
`

export default Workout
