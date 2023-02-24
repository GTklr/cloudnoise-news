//react imports
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import BlogPost from './components/BlogPost';
import "./App.css"
import CloudsVid from './assets/clouds.webm';


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
import Zeauk from './pages/artists/Zeauk';
import Dream from './pages/artists/Dream';
import Ivory from './pages/artists/Ivory';
import Zekke from './pages/artists/Zekke';
import Muratone from './pages/artists/Muratone';
import Danson from './pages/artists/Danson';
import Brendonse7an from './pages/artists/Brendon';
import Eujune from './pages/artists/Eujune';

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

  <Route element={<WithNav />}>
    <Route path="/artist/brendonse7an" element={ <Brendonse7an/> } />
  </Route>
  <Route element={<WithNav />}>
    <Route path="/artist/zeauk" element={ <Zeauk/> } />
  </Route>
  <Route element={<WithNav />}>
    <Route path="/artist/danson" element={ <Danson/> } />
  </Route>
  <Route element={<WithNav />}>
    <Route path="/artist/dream" element={ <Dream/> } />
  </Route>
  <Route element={<WithNav />}>
    <Route path="/artist/ivory" element={ <Ivory/> } />
  </Route>
  <Route element={<WithNav />}>
    <Route path="/artist/zekke" element={ <Zekke/> } />
  </Route>
  <Route element={<WithNav />}>
    <Route path="/artist/muratone" element={ <Muratone/> } />
  </Route>
  <Route element={<WithNav />}>
    <Route path="/artist/eujune" element={ <Eujune/> } />
  </Route>



</Routes>

      </AnimatePresence>
  )
}
function App() {

  return (
    
    <Router>
      <div className="App font-body">
        <div className='video-background'>
          <video className='videoTag' autoPlay loop muted>
            <source src={CloudsVid} type='video/webm' />
          </video>
        </div>
        <Animated />
      </div>
    </Router>
  )
}

export default App
