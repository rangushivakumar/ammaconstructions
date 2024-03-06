import About from './About/About';
import './App.css'
import Footer from './Footer/Footer';
import Navbar from './Navbar/Navbar'
import Services from './Services/Services';
import Slider from './Slider/Slider'
import 'bootstrap/dist/css/bootstrap.min.css';
import Media from './Media/Media';
import Contact from './Contact/Contact';
function App() {
  return (
    <>
      <Slider/>
      <Contact showMap={false}/>
      <Services/>
      <About/>
    </>
  )
}
export default App
