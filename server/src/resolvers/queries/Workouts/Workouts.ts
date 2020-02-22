import knex from '../../../knexfile'

const Workouts = async (_: any, args: any, context: any) => {
	return [
		{
			date: '1//1',
			name: 'hi',
			exercises: [ { name: 'hello', weight: 2, repitions: 3 } ]
		}
	]
	return knex('workouts')
}

export default Workouts
