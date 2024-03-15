import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Main from './Components/Main/Main';
import Programmes from './Components/Programmes/Programmes';
import Title from './Components/Title/Title';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Main />
      <Title subTitle="Our Programmes" title="What We Offer" />
      <Programmes />
      <About subTitle="About university" title="Nurturing Tomorrow's Leaders Today" />
      <Title subTitle="Contact Us" title="Get in Touch" />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
