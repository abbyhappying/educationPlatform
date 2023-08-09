import Navbar from './sections/navbar/Navbar';
import Header from './sections/header/Header';
import About from './sections/about/About';
import Campus from './sections/campus/Campus';
import Course from './sections/courses/Course';
import Contact from './sections/contact/Contact';
import Footer from './sections/footer/Footer';

const App = () => {
  return (
    <main>
        <Navbar/>
        <Header/>
        <About/>
        <Campus />
        <Course/>
        <Contact/>
        <Footer/>
    </main>
  )
}

export default App
