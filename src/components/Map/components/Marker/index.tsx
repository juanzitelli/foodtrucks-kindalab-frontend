import React from 'react'

import { FiMapPin } from "react-icons/fi";
import { MarkerContainer } from './styles/MarkerContainer';
interface Props {
	text: string;
	lat: number;
	lng: number;
}

const Marker = ({ text, lat, lng }: Props) => {
	return (
		<MarkerContainer>
			<FiMapPin fontSize={25}></FiMapPin>{text}
		</MarkerContainer>
	)
}

export default Marker
