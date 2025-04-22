// src/pages/HomePage.tsx
import React from 'react'
import Image from '../components/Image'
import Slider from '../components/Slider'
import ChatIA from './ChatIA'
import Cards from '../components/Cards'

const HomePage: React.FC = () => {
  return (
    <>
      <Image />
      <Slider />
      <ChatIA />
      <Cards />
    </>
  )
}

export default HomePage
