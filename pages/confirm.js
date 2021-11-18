import React, { useEffect } from 'react'
import tw from 'tailwind-styled-components'
import Map from './components/Map'
import Link from 'next/link'

const confirm = () => {

const getPickupCoordinates = () => {
    const pickup = "Raleigh";
    // Create a fetch function to call mapbox geolocation API
    fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${pickup}.json?` +
      new URLSearchParams({
        access_token: "pk.eyJ1IjoiZWhvZGdlMTk5MCIsImEiOiJja3ZtazRkcW8wYnBjMnZtbmhzZGFtcWdkIn0.uDjbngeCzrXZm3IEYM6rNg",
        limit: 1,
      }) 
    )
    .then(res => res.json())
    .then(data => {
      console.log(data.features[0].center)
    })
  }

  const getDropoffCoordinates = () => {
    const dropoff = "Cary";
    // Create a fetch function to call mapbox geolocation API
    fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${dropoff}.json?` +
      new URLSearchParams({
        access_token: "pk.eyJ1IjoiZWhvZGdlMTk5MCIsImEiOiJja3ZtazRkcW8wYnBjMnZtbmhzZGFtcWdkIn0.uDjbngeCzrXZm3IEYM6rNg",
        limit: 1,
      }) 
    )
    .then(res => res.json())
    .then(data => {
      console.log(data.features[0].center)
    })
  }

  useEffect(() => {
    getPickupCoordinates()
    getDropoffCoordinates()
    return () => {
      cleanup
    }
  }, [])

  return (
    <Wrapper>
      <Map />
      <RideContainer>
        <RideSelector></RideSelector>
        <ConfirmButton></ConfirmButton>
      </RideContainer>
    </Wrapper>
  )
}

export default confirm

const Wrapper = tw.div `
  flex h-screen flex-col
`

const RideContainer = tw.div `
  flex-1 
`

const RideSelector = tw.div ``

const ConfirmButton = tw.div ``