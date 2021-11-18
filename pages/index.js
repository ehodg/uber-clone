// import Head from 'next/head'
// import Image from 'next/image'
// import { useEffect } from 'react'
//import styles from '../styles/Home.module.css'
import tw from "tailwind-styled-components"
import Map from './components/Map'
import Link from 'next/link'




export default function Home() {



  return (
    <Wrapper>
      <Map />
      <ActionItems>
        <Header>
          <UberLogo src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.hillsdale.edu%2Fwp-content%2Fuploads%2F2019%2F02%2Fuber_2018_logo.png&f=1&nofb=1" />
          <Profile>
            <Name>Eric</Name>
            <UserImage src="https://scontent-atl3-1.xx.fbcdn.net/v/t31.18172-8/26677780_10155424262384372_7797262651530316906_o.jpg?_nc_cat=107&ccb=1-5&_nc_sid=730e14&_nc_ohc=PGx_qR2to54AX9eq90k&_nc_ht=scontent-atl3-1.xx&oh=92a2b69ceb38cbb241e19ea70a296ade&oe=61AC24AC"/>
          </Profile>
        </Header>
        <ActionButtons>
          <Link href='/Search'>
          <ActionButton>
            <ActionButtonImage src="https://i.ibb.co/cyvcpfF/uberx.png" />
            Ride
          </ActionButton>
          </Link>
          <Link href='/Search'>
          <ActionButton>
            <ActionButtonImage src="https://i.ibb.co/n776JLm/bike.png" />
            Wheels
          </ActionButton>
          </Link>
          <Link href='/Search'>
          <ActionButton>
            <ActionButtonImage src="https://i.ibb.co/5RjchBg/uberschedule.png" />
            Reserve
          </ActionButton>
          </Link>
        </ActionButtons>
        <InputButton>
        Where to?
        </InputButton>
      </ActionItems>
    </Wrapper>
  )
}

const Wrapper = tw.div `
  flex flex-col h-screen
`

const ActionItems = tw.div `
  flex-1 p-10
`

const Header = tw.div `
  flex justify-between items-center mb-5
`

const UberLogo = tw.img `
  h-10
`

const Profile = tw.div `
  flex items-center
`

const Name = tw.div `
  mr-4 w-10 text-sm
`

const UserImage = tw.img `
  h-12 w-12 rounded-full border border-grey-200 p-px
`

const ActionButtons = tw.div `
  flex 
`

const ActionButton = tw.div `
  flex bg-gray-200 flex-1 m-1 h-32 items-center flex-col justify-center rounded-lg transform hover:scale-105 transition text-xl
`

const ActionButtonImage = tw.img `
  h-3/5
`

const InputButton = tw.div `
  h-20 bg-gray-200 text-2xl p-4 flex items-center mt-8 rounded-lg
`