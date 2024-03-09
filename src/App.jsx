import Navbar from './Components/Navbar/Navbar';
import Main from './Components/Main/Main';
import Programmes from './Components/Programmes/Programmes';
import Title from './Components/Title/Title';

const App = () => {
  return (
    <div>
      <Navbar />
      <Main />
      <Title subTitle="Our Programmes" title="What We Offer" />
      <Programmes />
    </div>
  );
};

export default App;
