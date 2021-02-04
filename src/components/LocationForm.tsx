import _ from 'lodash';
import React, { ChangeEvent, ChangeEventHandler, useState } from 'react'
import PlacesAutocomplete, { getLatLng, geocodeByAddress } from 'react-places-autocomplete'
import { useDispatch } from 'react-redux';
import styled, { CSSProperties } from 'styled-components';
import { startFetchingFoodTrucks } from './../redux/actions/foodtrucks.actions';

const LocationForm = () => {
	const [address, setAddress] = useState("")
	const [limit, setLimit] = useState(10)
	const dispatch = useDispatch();

	const handleAddressSelect = async (value: string) => {
		const results = await geocodeByAddress(value)
		const { lat, lng } = await getLatLng(results[0])
		setAddress(value);
		dispatch(startFetchingFoodTrucks(lat, lng, limit))
	}

	const handleLimitChange: ChangeEventHandler = (event: ChangeEvent<HTMLInputElement>) => {
		setLimit(_.toNumber(event.target.value))
	}

	const LocationInputStyles: CSSProperties = {
		padding: "0.8rem 3rem",
		width: "30vw",
		fontSize: "1.1rem",
	}
	const LimitInputStyles: CSSProperties = {
		padding: "0.8rem 3rem",
		width: "10vw",
		fontSize: "1.1rem",
		marginLeft: "1rem"
	}

	const SuggestionStyles = {
		paddingTop: "5px",
		cursor: "pointer"
	}
	const SuggestionContainer = styled.div`
		display: flex;
		flex-direction: column;
		justify-items: flex-start;
		align-items: flex-start;
		margin-top: 1rem;
	`

	const divStyles = {
		marginLeft: "3rem",
		marginTop: "3rem",
	}

	return (
		<div style={{ height: "100%" }}>
			<PlacesAutocomplete value={address} onChange={setAddress} onSelect={handleAddressSelect}>
				{({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
					<div style={divStyles}>
						<input style={LocationInputStyles}{...getInputProps({ placeholder: "Type an address" })} />
						<input style={LimitInputStyles} onChange={handleLimitChange} value={limit} type="number" name="limit" id="limit" />
						{loading ? <span>...Loading</span> : null}
						<SuggestionContainer>
							{
								suggestions.map(suggestion => {
									return (<span style={SuggestionStyles} {...getSuggestionItemProps(suggestion)}>{suggestion.description}</span>)
								})
							}
						</SuggestionContainer>
					</div>
				)
				}
			</PlacesAutocomplete>
		</div>
	)
}

export default LocationForm
