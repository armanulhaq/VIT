import "./About.css";
const About = ({ subTitle, title }) => {
  return (
    <div className="about">
      <div className="about-left">
        <img src="/images/about.jpg"></img>
      </div>
      <div className="about-right">
        <div className="title">
          <p>{subTitle}</p>
          <h2>{title}</h2>
          <p className="about-description">Embark on a transformative educational journey with our university's comprehensive education programs. our cutting-edge curriculum is designed to empower students with the knowledge, skills, and experiences needed to excel in the dynamic field of education. with a focus on innovation, hands-on learning, and personalized mentorship, our programs prepare aspiring educators to make a meaningful impact in classrooms, schools, and communities. Whether you aspire to become a teacher, administrator, counselor, or educational leader, our diverse range of programs offers the perfect pathway to achieve your goals and unlock your full potential in shaping the future of education.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
