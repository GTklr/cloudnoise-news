//react imports
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


//Component Imports
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import About from './pages/About';
import Artists from './pages/artists/Artists';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Create from './pages/Create';
import Home from './pages/Home'
import Login from './pages/Login';
import SignUp from './pages/Signup';


function App() {

  return (
    <Router>
    <div className="App">
    <Navbar />

      <Routes>
      
      <Route exact path="/" element={ <Home/> } />
      <Route exact path="/about" element={ <About/> } />
      <Route path="/blog" element={ <Blog/> } />
      <Route path="/artists" element={ <Artists/> } />
      <Route path="/create" element={ <Create/> } />
      <Route path="/contact" element={ <Contact/> } />
      <Route path="/login" element={ <Login/> } />
      <Route path="/signup" element={ <SignUp/> } />

      
      </Routes>
    <Footer className="fixed bottom-0"/>

    </div>
    </Router>
  )
}

export default App
