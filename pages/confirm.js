import React, { useEffect, useState } from 'react'
import tw from 'tailwind-styled-components'
import Map from './components/Map'
import Link from 'next/link'
import { useRouter } from 'next/router'

const confirm = () => {
  const router = useRouter()
  const {pickup, dropoff} = router.query

  const [pickupCoordinates, setPickupCoordinates ] = useState()
  const [ dropoffCoordinates, setDropoffCoordinates ] = useState()

 const getPickupCoordinates = (pickup) => {  
    // Create a fetch function to call mapbox geolocation API
    fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${pickup}.json?` +
      new URLSearchParams({
        access_token: "pk.eyJ1IjoiZWhvZGdlMTk5MCIsImEiOiJja3ZtazRkcW8wYnBjMnZtbmhzZGFtcWdkIn0.uDjbngeCzrXZm3IEYM6rNg",
        limit: 1,
      }) 
    )
    .then(res => res.json())
    .then(data => {
      // console.log(data.features[0].center)
      setPickupCoordinates(data.features[0].center);
    })
  }

  const getDropoffCoordinates = (dropoff) => {
    // Create a fetch function to call mapbox geolocation API
    fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${dropoff}.json?` +
      new URLSearchParams({
        access_token: "pk.eyJ1IjoiZWhvZGdlMTk5MCIsImEiOiJja3ZtazRkcW8wYnBjMnZtbmhzZGFtcWdkIn0.uDjbngeCzrXZm3IEYM6rNg",
        limit: 1,
      }) 
    )
    .then(res => res.json())
    .then(data => {
      // console.log(data.features[0].center)
      setDropoffCoordinates(data.features[0].center);
    })
  }

  useEffect(() => {
    getPickupCoordinates(pickup)
    getDropoffCoordinates(dropoff)
  }, [pickup, dropoff])

  return (
    <Wrapper>
      <Map 
        pickupCoordinates={pickupCoordinates}
        dropoffCoordinates={dropoffCoordinates}
      />
      <RideContainer>
        <RideSelector>
          Ride Selector
        </RideSelector>
        <ConfirmButton>
          Confirm Button
        </ConfirmButton>
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