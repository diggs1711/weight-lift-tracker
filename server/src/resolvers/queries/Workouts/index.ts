import Workouts from './Workouts'

export default {
	Query: {
		Workouts
	},
	Workout: () => {
		return {
			date: '1/1/1',
			name: 'Test',
			exercise: [
				{
					name: 'Ex',
					weight: 2,
					repitions: 3
				}
			]
		}
	},
	Exercise: () => {
		return "Hi"
	}
}
