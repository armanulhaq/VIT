import "./Contact.css";
const About = ({ subTitle, title }) => {
  return (
    <div className="contact">
      <div className="contact-left">
        <div className="contact-head">
            <div className="contact-head-text">Send us a message</div>
            <img className="email-icon" src="/images/msg.png"></img>
        </div>
        <p>Feel free to reach out through contact form or find our contact information below. Your feedback, questions, and suggestions are important to us as we strive to provide exceptional service to our university community.</p>
        <div className="contact-info-container">
            <div className="contact-info">
                <img className="contact-icons" src="/images/mail.png" alt="Email" /> 
                <div>armanulhaq10@gmail.com</div>
            </div>
            <div className="contact-info">
                <img className="contact-icons" src="/images/call.png" alt="Call" />
                <div>+91 6005600656</div>
            </div>
            <div className="contact-info">
                <img className="contact-icons" src="/images/location.png" alt="Location" />
                <div>Bengaluru, IN</div>
            </div>
        </div>
      </div>
      <div className="contact-right">
        <form>
            <div className="input-container">
                <label>Your name</label>
                <input type="text" name="name" placeholder="Enter your name" required></input>
            </div>
            <div className="input-container">
                <label>Phone Number</label>
                <input type="tel" name="phone" placeholder="Enter your mobile number" required></input>
            </div>
            <div className="input-container">   
                <label>Write your message</label>
                <textarea name="message"  placeholder="Enter your message"></textarea>
            </div>
            <button className="submit-button">
                Submit
            </button>
        </form>
        
      </div>
    </div>
  );
};

export default About;
