import React from 'react'
import { useQuery } from 'urql'

const getWorkouts = `
{
    workouts {
      weight
      workout_day
    }
  }

`
const Workouts = () => {
	const [ { fetching, error, data } ] = useQuery({ query: getWorkouts })

	if (fetching) return <div>Loading...</div>
	if (error) return <div>Error</div>

	return (
		<div>
			<h3>Workouts</h3>
			<ul>
				{data.workouts.map((workout: { weight: number; workout_day: number }) => (
					<li>
						{workout.weight}
						{workout.workout_day}
					</li>
				))}
			</ul>
		</div>
	)
}

export default Workouts
