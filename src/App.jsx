
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import GlobalStyle from './GlobalStyle'
import Footer from './Components/Footer/Footer'
import Header from './Components/Header/Header'
import AboutMe from './Pages/AboutMe'
import Skills from './Pages/Skills'
import Projects from './Pages/Projects'


function App() {

  return (
    <Router>
      <Header/>
      <GlobalStyle/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/aboutMe' element={<AboutMe/>}></Route>
        <Route path='/skills' element={<Skills/>}></Route>
        <Route path='/projects' element={<Projects/>}></Route>
      </Routes>
      <Footer/>
    </Router>
  
 )
}

export default App
