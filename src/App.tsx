import React from 'react';
import Map from './components/Map/index'
import LocationForm from './components/LocationForm/index';
import styled from 'styled-components';

const App = () => {

  const MainContainer = styled.main`
    display: grid;
    justify-content: space-between;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 3fr;
    max-height: 100vh ;
    max-width: 100vw ;
    @media(min-width: 760px) {
      grid-template-columns: 1fr 2fr;
      grid-template-rows: 1fr;
    }
  `

  return (
    <MainContainer>
      <LocationForm />
      <Map />
    </MainContainer>
  );
}

export default App;
