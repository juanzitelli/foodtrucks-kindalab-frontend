import React from 'react'
import Marker from './components/Marker/index';import GoogleMapReact from 'google-map-react';
import _ from 'lodash'
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { MapContainer } from './styles/MapContainer';

const Map = () => {

	const { foodTrucks } = useTypedSelector(state => state.foodTrucks)

	return (
		<MapContainer>
			<GoogleMapReact
				bootstrapURLKeys={{ key: process.env.REACT_APP_MAPS_API_KEY as string }}
				defaultCenter={{
					lat: 37.7236612795053,
					lng: -122.43594382524
				}}
				defaultZoom={13}
			>
				{
					foodTrucks !== [] ? foodTrucks.map(foodTruck => <Marker
						key={foodTruck.objectid}
						id={foodTruck.objectid}
						lat={_.toNumber(foodTruck.latitude)}
						lng={_.toNumber(foodTruck.longitude)}
						text={`${foodTruck.applicant}`}
					/>) : <h1>Hello</h1>
				}
			</GoogleMapReact>
		</MapContainer>
	)
}

export default Map
