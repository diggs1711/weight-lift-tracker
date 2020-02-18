import React from 'react'
import { useMutation } from 'urql'
import useFirebase from '../../hooks/use-firebase'

const addWorkout = `
mutation {
    insert_workouts(objects: {
      weight: 80,
      exercise_type: 2,
      workout_day:3,
      workout_id: 5
    }) {
      returning {
        weight
      }
    }
  }
`
const AddWorkout = () => {
	const firebase = useFirebase()
	if (!firebase) return <div>Error...</div>

	const handleSubmitWorkout = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()

		firebase.addWorkout({
			exercises: [
				{
					name: 'exercise1',
					weight: 80
				}
			]
		})
	}

	return (
		<form onSubmit={(e) => handleSubmitWorkout(e)}>
			<input type="text" placeholder="hello" />
			<button type="submit">Add</button>
		</form>
	)
}

export default AddWorkout
