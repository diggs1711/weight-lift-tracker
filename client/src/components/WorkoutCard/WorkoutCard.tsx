import React from 'react'
import {
	Paper,
	Grid,
	Typography,
	TableContainer,
	Table,
	TableHead,
	TableRow,
	TableCell,
	TableBody,
	makeStyles
} from '@material-ui/core'

const useStyles = makeStyles({
	table: {
		// maxWidth: 700
	}
})

const ElevatedPaper = ({ children }: any) => (
	<Paper style={{ maxWidth: '400px', marginTop: '1em' }} elevation={5}>
		{children}
	</Paper>
)

export type Exercise = {
    name: string,
    weight: number
}

type WorkoutCardProps = {
    exercises: Exercise[]
}

const WorkoutCard = ({ exercises }: WorkoutCardProps) => {
	const classes = useStyles()

	return (
		<TableContainer component={ElevatedPaper}>
			<Table className={classes.table} aria-label="simple table">
				<TableHead>
					<TableRow>
						<TableCell>Exercise</TableCell>
						<TableCell>Weight</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{exercises.map((exercise) => (
							<TableRow key={exercise.name}>
								<TableCell component="th" scope="row">
									{exercise.name}
								</TableCell>
								<TableCell >{exercise.weight}</TableCell>
							</TableRow>
						))}
				</TableBody>
			</Table>
		</TableContainer>
	)
}

export default WorkoutCard
