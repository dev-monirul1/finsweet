import { useState } from 'react'
import HomeIndex from './pages/home/HomeIndex'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <HomeIndex />
    </>
  )
}

export default App
