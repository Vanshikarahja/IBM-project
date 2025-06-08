// This is for component-level or app-level custom styles.
// You can write custom CSS classes here and use them in your components.

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './index.css'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1 className="text-4xl font-bold text-blue-500">hello guys</h1>
    </div>
    
  )
}

export default App
