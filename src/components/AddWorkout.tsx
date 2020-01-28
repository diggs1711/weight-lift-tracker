import React from 'react'
import { useMutation } from 'urql'

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
    const [{ fetching, data, error }, execute] = useMutation(addWorkout)

    const handleSubmitWorkout = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        execute()
    }

	return (
		<form onSubmit={e => handleSubmitWorkout(e)}>
            <input type="text" placeholder="hello" />
            <button disabled={fetching} type='submit'>Add</button>
		</form>
	)
}

export default AddWorkout
