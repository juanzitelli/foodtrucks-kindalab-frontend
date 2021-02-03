import React, { FormEvent, FormEventHandler, useState } from 'react';
import GoogleMapReact from 'google-map-react';
import PlacesAutocomplete, {getLatLng, geocodeByAddress} from 'react-places-autocomplete'
import { FoodTruck } from './types/FoodTruck';
function App() {

  // PLACES AUTOCOMPLETE
  const [address, setAddress] = useState("")

  const handleAddressSelect = async (value: string) => {
    const results = await geocodeByAddress(value)
    const latLng = await getLatLng(results[0])
    setAddress(value);
    console.log(latLng)
   }

  const Marker = ({ lat, lng, text }: { lat: number; lng: number; text: string; }) => (<div>{`${lat} ${lng} ${text}`}</div>)

  return (
    <>
      <div style={{ height: '50vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: process.env.REACT_APP_MAPS_API_KEY as string }}
          defaultCenter={{
            lat: 59.95,
            lng: 30.33
          }}
          defaultZoom={11}
        >
          <Marker
            lat={59.955413}
            lng={30.337844}
            text="My Marker"
          />
        </GoogleMapReact>
      </div>
      <div>
        <PlacesAutocomplete value={address} onChange={setAddress} onSelect={handleAddressSelect}>
          {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
            <div>

              <input {...getInputProps({ placeholder: "Type an address" })} />

              <div>
                {loading ? <div>...Loading</div> : null}

                {
                  suggestions.map(suggestion => {
                    return (<div {...getSuggestionItemProps(suggestion)}>{suggestion.description}</div>)
                  })
                }
              </div>
            </div>
          )

          }
        </PlacesAutocomplete>
      </div>

    </>
  );
}

export default App;
