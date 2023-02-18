import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Home from './pages/Home'

function App() {

  return (
    <div className="App">
      <Navbar />
      <Home />
      <Footer className="fixed bottom-0"/>
    </div>
  )
}

export default App
