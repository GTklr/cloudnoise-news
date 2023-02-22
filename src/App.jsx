//react imports
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import BlogPost from './components/BlogPost';
import "./App.css"
import CloudsVid from './assets/clouds.mp4';


//Component Imports
import Footer from './components/Footer'
import WithNav from './components/layout/WithNav';
import WithoutNav from './components/layout/WithoutNav';
import NavbarOne from './components/Navbar'
import About from './pages/About';
import Artists from './pages/artists/Artists';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Create from './pages/Create';
import Home from './pages/Home';
import Intro from './pages/Intro'
import Login from './pages/Login';
import Profile from './pages/Profile';
import SignUp from './pages/Signup';
import { AnimatePresence } from 'framer-motion';

const Animated = () => {
  return (
      <AnimatePresence mode='sync' >

<Routes>
  <Route element={<WithoutNav />}>
    <Route exact path="/" element={<Intro/>} />
  </Route>

  <Route element={<WithNav />}>
    <Route path="/home" element={<Home/>} />
  </Route>

  <Route element={<WithNav />}>
    <Route path="/about" element={ <About/> } />
  </Route>

  <Route element={<WithNav />}>
    <Route path="/blog" element={ <Blog/> } />
  </Route>

  <Route element={<WithNav />}>
    <Route path="/artists" element={ <Artists/> } />
  </Route>

  <Route element={<WithNav />}>
    <Route path="/create" element={ <Create/> } />
  </Route>

  <Route element={<WithNav />}>
    <Route path="/contact" element={ <Contact/> } />
  </Route>

  <Route element={<WithNav />}>
    <Route path="/login" element={ <Login/> } />
  </Route>

  <Route element={<WithNav />}>
    <Route path="/signup" element={ <SignUp/> } />
  </Route>

  <Route element={<WithNav />}>
    <Route path="/blogpost/:title" element={ <BlogPost/> } />
  </Route>

  <Route element={<WithNav />}>
    <Route path="/profile/:displayName" element={ <Profile/> } />
  </Route>
</Routes>
      </AnimatePresence>
  )
}
function App() {

  return (
    
    <Router>
      <div className="App font-body video-background">
      <Animated />
      <video className='videoTag' autoPlay loop muted>
        <source src={CloudsVid} type='video/mp4' />
      </video>
      
    </div>
    </Router>
  )
}

export default App
