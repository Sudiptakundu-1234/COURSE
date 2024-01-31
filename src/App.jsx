import './App.css'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Navbar from './Layouts/Navbar/Navbar'
import Home from './Components/Home/Home'
import SignIn from './Components/Login/Login'
import Signup from './Components/Signup/Signup'

function App() {
  

  return (
  <>
<Router>
<Navbar />
  <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/login' element={<SignIn />} />
    <Route path='/signup' element={<Signup />} />

  </Routes>
</Router>
  </>
  )
}

export default App
