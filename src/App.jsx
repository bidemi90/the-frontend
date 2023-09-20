import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route,Routes } from 'react-router-dom'
import Split from './components/Split'
import Adminsplit from './components/Adminsplit'
import Pagenotfound from './components/Pagenotfound'


function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
        <Route path="*" element={<Pagenotfound />}></Route>
        <Route path="/*" element={<Split />}></Route>
        <Route path="theadmin/*" element={< Adminsplit/>}></Route>
      </Routes>
  )
}

export default App
