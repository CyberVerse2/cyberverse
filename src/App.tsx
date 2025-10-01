import './App.css';
import About from './components/About';
import Ending from './components/Ending';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Products from './components/Products';
import RootLayout from './components/RootLayout';

function App() {
  /** structure of this page:
   * navbar
   * hero
   * about
   * things we built/experiments
   * Founder Bio
   * Closing notes
   * Footer**/
  return <RootLayout>
    <Navbar />
    <Hero />
    <About />
    <Products />
    <Ending/>
    <Footer/>
  </RootLayout>;
}

export default App;

