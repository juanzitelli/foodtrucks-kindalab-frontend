import React from 'react'
import { Prediction as PredictionType } from '../../../../types/Prediction'
import { StyledPrediction } from '../../styles/StyledPrediction'

interface Props {
	prediction: PredictionType;
	onClickHandler: () => void
}

const Prediction = ({ prediction, onClickHandler }: Props) => {
	return (
		<StyledPrediction onClick={onClickHandler}>
			{prediction.description}
		</StyledPrediction>
	)
}

export default Prediction
