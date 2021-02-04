import _ from 'lodash';
import React, { ChangeEvent, ChangeEventHandler, useState } from 'react'
import PlacesAutocomplete, { getLatLng, geocodeByAddress } from 'react-places-autocomplete'
import { useDispatch } from 'react-redux';
import { startFetchingFoodTrucks } from '../../redux/actions/foodtrucks.actions';
import { divStyles, LimitInputStyles, LocationInputStyles, SuggestionContainer, SuggestionStyles } from './styles/LocationFormStyles';

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
		setLimit(_.toNumber(event.target.value) !== 0 ? _.toNumber(event.target.value) : 1)
	}


	return (
		<div style={{ height: "100%" }}>
			<PlacesAutocomplete value={address} onChange={setAddress} onSelect={handleAddressSelect}>
				{({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
					<div style={divStyles}>
						<div style={{ display: "flex", flexDirection: "column" }}>
							<label htmlFor="location">Address</label>
							<input style={LocationInputStyles}{...getInputProps({ placeholder: "Type an address" })} name="location" id="location" />
							{loading ? <span>...Loading</span> : null}
							<SuggestionContainer>
								{
									suggestions.map(suggestion => {
										return (<span style={SuggestionStyles} {...getSuggestionItemProps(suggestion)}>{suggestion.description}</span>)
									})
								}
							</SuggestionContainer>
						</div>
						<div style={{ display: "flex", flexDirection: "column", marginLeft: "1rem" }}>
							<label htmlFor="limit">Results limit</label>
							<input style={LimitInputStyles} onChange={handleLimitChange} value={limit} type="number" name="limit" id="limit" min={1} />
						</div>
					</div>
				)
				}
			</PlacesAutocomplete>
		</div>
	)
}

export default LocationForm
