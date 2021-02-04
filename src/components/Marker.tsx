import React from 'react'
import styled from 'styled-components'
import { FiMapPin } from "react-icons/fi";
interface Props {
	isLocation: boolean;
	text: string;
	lat: number;
	lng: number;
}

const Container = styled.div<{}>`
	font-size: 1rem !important;
	color: black;
	border-radius: 10px;
	padding: 0.5rem 3rem;
	background-color: white;
	text-align: center;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	box-shadow: 10px 10px 23px -5px rgba(0,0,0,0.75);
	-webkit-box-shadow: 10px 10px 23px -5px rgba(0,0,0,0.75);
	-moz-box-shadow: 10px 10px 23px -5px rgba(0,0,0,0.75);
`

const Marker = ({ isLocation, text, lat, lng }: Props) => {
	return (
		<Container>
			<FiMapPin fontSize={25}></FiMapPin>{text}
		</Container>
	)
}

export default Marker
