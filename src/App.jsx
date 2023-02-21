//react imports
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BlogPost from './components/BlogPost';


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
import Profile from './pages/Profile';
import SignUp from './pages/Signup';


function App() {

  return (
    <Router>
    <div className="App font-body">
    <Home/>
    <Navbar />

      <Routes>
      
      <Route exact path="/"></Route>
      <Route exact path="/about" element={ <About/> } />
      <Route path="/blog" element={ <Blog/> } />
      <Route path="/artists" element={ <Artists/> } />
      <Route path="/create" element={ <Create/> } />
      <Route path="/contact" element={ <Contact/> } />
      <Route path="/login" element={ <Login/> } />
      <Route path="/signup" element={ <SignUp/> } />
      <Route path="/signup" element={ <SignUp/> } />
      <Route path="/blogpost/:title" element={ <BlogPost/> } />
      <Route path="/profile/:displayName" element={ <Profile/> } />
      
          

      
      </Routes>
    <Footer className="fixed bottom-0"/>

    </div>
    </Router>
  )
}

export default App
