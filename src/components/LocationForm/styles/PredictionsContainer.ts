import styled from "styled-components";

export const PredictionContainer = styled.div<{hasPredictions: boolean}>`
	display: flex;
	flex-direction: column;
	max-height: 10rem;
	max-width: 100%;
	overflow-y: ${props => props.hasPredictions ? "scroll" : "hidden"};
`;
