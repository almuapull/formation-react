import { useState } from 'react'
import { AddcolorChanger } from './components/Addcolor'
const App = () => {
  const [colorMode, setColorMode] = useState('primary')

  return <>
    <div>
      <h1>Change color</h1>
      <button onClick={() => setColorMode(prev => prev === 'primary' ? 'secondary' : 'primary')}>Change</button>
      <AddcolorChanger color={colorMode}/>
    </div>
  </>
}

export default App