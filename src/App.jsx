import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Main from './Components/Main/Main';
import Programmes from './Components/Programmes/Programmes';
import Title from './Components/Title/Title';
import About from './Components/About/About';
import Testimonials from './Components/Testimonials/Testimonials';

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Main />
      <Title subTitle="Our Programmes" title="What We Offer" />
      <Programmes />
      <About subTitle="About university" title="Nurturing Tomorrow's Leaders Today" />
      <Title subTitle="Testimonials" title="What Students Says" />
      <Testimonials />
    </div>
  );
};

export default App;
