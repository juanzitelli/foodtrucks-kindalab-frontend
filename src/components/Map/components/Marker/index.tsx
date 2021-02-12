import React from 'react'

import { FiMapPin } from "react-icons/fi";
import { MarkerContainer } from './styles/MarkerContainer';
interface Props {
	text: string;
	lat: number;
	lng: number;
	id: string;
}

const Marker = ({ text, lat, lng, id }: Props) => {
	return (
		<MarkerContainer id={id}>
			<FiMapPin fontSize={25}></FiMapPin>{text}
		</MarkerContainer>
	)
}

export default Marker
