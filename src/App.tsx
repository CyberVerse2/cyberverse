import './App.css';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
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
    {/* <About />
    <Products />
    <Bio />
    <Footer/> */} 
  </RootLayout>;
}

export default App;

