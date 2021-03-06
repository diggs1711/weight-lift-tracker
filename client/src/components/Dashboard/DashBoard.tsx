import React, { Fragment } from 'react'
import { Paper, List, ListItem, Typography } from '@material-ui/core'
import WorkoutCard from '../WorkoutCard/WorkoutCard'

export type Exercise = {
	name: string
	weight: number
}

export type Workout = {
	date: string
	exercises: Exercise[]
}

type DashBoardProps = {
	workouts: Workout[]
}

const DashBoard = ({ workouts }: DashBoardProps) => {
	return (
		<div style={{ margin: '1em' }}>
			{workouts.map((workout, index) => (
				<Fragment key={index}>
					<Typography variant="h6"> Workout {index + 1}</Typography>
					<WorkoutCard exercises={workout.exercises} />
				</Fragment>
			))}
		</div>
	)
}

export default DashBoard
