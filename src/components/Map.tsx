import React from 'react'
import Marker from './../components/Marker';
import { RootStateOrAny, useSelector } from 'react-redux'
import { FoodTruck } from './../types/FoodTruck'
import GoogleMapReact from 'google-map-react';
import _ from 'lodash'
interface Props {

}

const Map = (props: Props) => {

	const { foodTrucks } = useSelector<RootStateOrAny, { foodTrucks: FoodTruck[] }>(state => state.foodTrucks)

	return (
		<div style={{ height: '60vh', width: '100%' }}>
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
						lat={_.toNumber(foodTruck.latitude)}
						lng={_.toNumber(foodTruck.longitude)}
						isLocation={false}
						text={`${foodTruck.applicant}`}
					/>) : <h1>Hello</h1>
				}
			</GoogleMapReact>
		</div>
	)
}

export default Map
