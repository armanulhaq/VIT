import './Navbar.css';

const Navbar = () => {
  return (
    <nav>
      <div className="university-logo-container">
        <img className="uni-logo" src="/public/images/college-logo.png"></img>
        <h3>Elysian University</h3>
      </div>

      <ul>
        <li>Home</li>
        <li>Program</li>
        <li>About Us</li>
        <li>Campus</li>
        <li>Testimonials</li>
        <button>Contact Us</button>
      </ul>
    </nav>
  );
};

export default Navbar;
