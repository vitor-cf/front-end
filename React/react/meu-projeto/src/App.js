import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Home from './pages/Home'
import Contato from './pages/Contato'
import Empresa from './pages/Empresa'
import NavBar from './components/layout/NavBar'
import Footer from './components/layout/Footer'

function App() {

  return (
    <Router>
      <NavBar/>
      <Routes>
        <Route exact path="/" element={<Home/>}>
          
        </Route> 
        <Route path="/empresa" element={<Empresa/>}>
          
        </Route>
        <Route path="/contato" element={<Contato/>}>
          
        </Route>
      </Routes>
      <Footer/>
    </Router>
  )
}
  
export default App;
  
  

  
     

  



