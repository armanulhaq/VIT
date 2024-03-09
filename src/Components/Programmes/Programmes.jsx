import './Programmes.css';

const Programmes = () => {
  return (
    <div className="programmes">
      <div className="programme">
        <img src="/images/programme-1.jpg"></img>
        <div className="caption">
          <img src="/images/programme-1-icon.png"></img>
          <p>Graduate Degree</p>
        </div>
      </div>
      <div className="programme">
        <img src="/images/programme-2.jpg"></img>
        <div className="caption">
          <img src="/images/programme-2-icon.png"></img>
          <p>Masters Degree</p>
        </div>
      </div>
      <div className="programme">
        <img src="/images/programme-3.jpg"></img>
        <div className="caption">
          <img src="/images/programme-3-icon.png"></img>
          <p>Post Graduate Degree</p>
        </div>
      </div>
    </div>
  );
};

export default Programmes;
