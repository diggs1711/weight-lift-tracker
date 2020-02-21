import React from 'react'
import { useQuery } from 'urql'

const getExercises = `
{
    Exercises {
      name
    }
  }
`
const Exercises = () => {
	const [ { fetching, data, error } ] = useQuery({ query: getExercises })

	if (error) return <div>Error...</div>
	if (fetching) return <div>Loading...</div>


    return <div>
        <h3>Exercises</h3>
        <ul>
            {data.Exercises.map((exercise: any) => (
                <li>{exercise.name}</li>
            ))}
        </ul>
    </div>
}

export default Exercises
