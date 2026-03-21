import './App.css';
import About from './components/About';
import Cursor from './components/Cursor';
import Ending from './components/Ending';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import Navbar from './components/Navbar';
import Products from './components/Products';
import RootLayout from './components/RootLayout';

function App() {
  return (
    <RootLayout>
      <Cursor />
      <Navbar />
      <Hero />
      <Marquee />
      <About />
      <Marquee />
      <Products />
      <Ending />
      <Footer />
    </RootLayout>
  );
}

export default App;
