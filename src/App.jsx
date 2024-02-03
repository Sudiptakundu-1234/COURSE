import './App.css'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Navbar from './Layouts/Navbar/Navbar'
import SignIn from './Components/Login/Login'
import SignUp from './Components/Signup/Signup'
import Home from './Components/Home'

function App() {
  

  return (
  <>
  
<Router>
<Navbar />
  <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/login' element={<SignIn />} />
    <Route path='/signup' element={<SignUp />} />

  </Routes>
</Router>
  </>
  )
}

export default App
