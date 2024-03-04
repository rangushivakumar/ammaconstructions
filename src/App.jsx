import About from './About/About';
import './App.css'
import Footer from './Footer/Footer';
import Navbar from './Navbar/Navbar'
import Services from './Services/Services';
import Slider from './Slider/Slider'
import 'bootstrap/dist/css/bootstrap.min.css';
import Media from './Media/Media';
function App() {
  return (
    <>
      <Slider/>
      <Services/>
      <About/>
    </>
  )
}
export default App
