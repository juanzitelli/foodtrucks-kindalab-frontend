import React from 'react';
import Map from './components/Map/index'
import LocationForm from './components/LocationForm/index';
import styled from 'styled-components';

const App = () => {

  const MainContainer = styled.main`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    max-height: 100vh ;
    max-width: 100vw ;
    @media(min-width: 760px) {
      flex-direction: row;
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
