import React from 'react'
import Hero from '../components/Hero'
import ServerInfo from '../components/ServerInfo'
import Shop from '../components/Shop'
import RecentPurchases from '../components/RecentPurchases'
import HowToJoin from '../components/HowToJoin'
import Staff from '../components/Staff'

const HomePage = () => {
  return (
    <>
      <Hero />
      <ServerInfo />
      <Shop />
      <RecentPurchases />
      <HowToJoin />
      <Staff />
    </>
  )
}

export default HomePage