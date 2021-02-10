import _ from 'lodash'
import React, { useEffect } from 'react'
import { geocodeByAddress, getLatLng } from 'react-places-autocomplete';
import { useDispatch } from 'react-redux';
import useForm from '../../hooks/useForm';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { startFetchingFoodTrucks } from '../../redux/actions/foodtrucks.actions';
import { predictionsCleared, predictionSelected, startFetchingPlaces } from '../../redux/actions/places.actions';
import { Prediction as PredictionType } from '../../types/Prediction';
import { StyledForm } from './styles/StyledForm'
import { FormGroup } from './styles/FormGroup'
import Prediction from './components/Prediction';
import { StyledInput } from './styles/StyledInput';
import { StyledButton } from './styles/StyledButton';
import { PredictionContainer } from './styles/PredictionsContainer';

const LocationForm = () => {

	const placesPredictionsLimit = 5

	const dispatch = useDispatch()

	type LocationFormData = {
		location: string;
		limit: number;
	}

	const initialState: LocationFormData = {
		location: "",
		limit: 3
	}

	const [formValues, handleInputChange, resetForm, changeValue] = useForm<LocationFormData>(initialState)

	const { location, limit } = formValues;

	const { predictions, selectedPrediction } = useTypedSelector(state => state.places)
	const { foodTrucksLoaded } = useTypedSelector(state => state.ui)

	useEffect(() => {
		dispatch(startFetchingPlaces(location, placesPredictionsLimit))
	}, [location, limit, dispatch])

	const formSubmitHandler = async (event: React.SyntheticEvent) => {
		event.preventDefault();
		const results = await geocodeByAddress(location)
		const { lat, lng } = await getLatLng(results[0])	
		
		dispatch(startFetchingFoodTrucks(lat, lng, limit))
		
	}

	const predictionClickHandler = (prediction: PredictionType) => {
		changeValue('location', prediction.description)
		dispatch(predictionSelected(prediction))
		dispatch(predictionsCleared())
	}

	const clearLocationHandler = () => {
		resetForm();
		dispatch(predictionsCleared())
	}

	return <>
		<StyledForm onSubmit={formSubmitHandler}>
			<FormGroup>
				<label htmlFor="location">Location</label>
				<div>
					<StyledInput placeholder="1250 5th Avenue, San Francisco" autoComplete={`off`} type="text" name="location" id="location" value={location} onChange={handleInputChange} />
					<StyledButton onClick={clearLocationHandler}>Clear</StyledButton>
				</div>
			</FormGroup>

			<PredictionContainer hasPredictions={!_.isUndefined(predictions)}>
				{
					!_.isUndefined(predictions) && (predictions as PredictionType[]).map(prediction => {
						return prediction ? <Prediction prediction={prediction} onClickHandler={() => predictionClickHandler(prediction)} /> : null
					})
				}
			</PredictionContainer>

			<FormGroup>
				<label htmlFor="limit">Results quantity</label>
				<StyledInput type="number" name="limit" id="limit" min={1} value={limit} onChange={handleInputChange} />
			</FormGroup>
			{
				foodTrucksLoaded ? <div>
					{
						selectedPrediction ? <StyledButton type="submit">Search</StyledButton> : <p>Find and select a location to search for food trucks!</p>
					}
				</div> : <p>...Loading</p>
			}
		</StyledForm>
	</>
}

export default LocationForm
