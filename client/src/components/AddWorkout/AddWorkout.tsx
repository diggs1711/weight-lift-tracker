import React from 'react'
import useFirebase from '../../hooks/use-firebase'

const AddWorkout = () => {
	const firebase = useFirebase()

	const handleSubmitWorkout = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()

    firebase?.addWorkout({
      exercises: [
        {
          name: 'Bench',
          weight: 89
        }
      ]
    })
	}

	return (
		<form onSubmit={(e) => handleSubmitWorkout(e)}>
			<input type="text" placeholder="hello" />
			<button type="submit">
				Add
			</button>
		</form>
	)
}

export default AddWorkout
