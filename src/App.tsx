import React from 'react';
import Map from './components/Map/index'
import LocationForm from './components/LocationForm/index';
import styled from 'styled-components';

const App = () => {

  const MainContainer = styled.main`
    display: flex;
    flex-direction: column;
    height: 100vh;
  `

  return (
    <MainContainer>
      <Map />
      <LocationForm />
    </MainContainer>
  );
}

export default App;
