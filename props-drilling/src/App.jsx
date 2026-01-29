import React from 'react'
import Profile from './components/Profile'

const App = () => {
  return (
    <>
      <div className='content'>
        <Profile username="Sarvesh Mishra" age={23} profileImage="https://www.profoto.com/contentassets/6480dced40f4428eb1cd5e12a822572e/lindsay-adler-male-portrait-photography-final-image-banner.jpg?format=webp&width=1550" />
        <Profile username="Keshav Mishra" age={21} profileImage="https://i0.wp.com/picjumbo.com/wp-content/uploads/chilled-young-black-male-model-in-studio-portrait-free-image.jpeg?w=2210&quality=70" />
        <Profile username="Bhagya Lalshmi" age={23} profileImage="https://thelenslounge.com/wp-content/uploads/2024/06/7-portrait-photography-tips.jpg" />
      </div>
    </>
  )
}

export default App
