import React from 'react'
import './Testimonials.css'

const Testimonials = () => {
  return (
    <div className='testimonials'>
        <img className="next-slider" src="/images/next-slider.png"></img>
        <img className="back-slider" src="/images/back-slider.png"></img>
        <div className="slider">
            <ul>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src="/images/user-1.jpg" alt="" />
                            <div>
                                <h3>Manaswita Solanki</h3>
                                <span>Hyderabad, IN</span>
                            </div>
                        </div>
                        <p>Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.</p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src="/images/user-2.jpg" alt="" />
                            <div>
                                <h3>Piyali Kar</h3>
                                <span>Bengaluru, IN</span>
                            </div>
                        </div>
                        <p>Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.</p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src="/images/user-1.jpg" alt="" />
                            <div>
                                <h3>Manaswita Solanki</h3>
                                <span>Hyderabad, IN</span>
                            </div>
                        </div>
                        <p>Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.</p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src="/images/user-1.jpg" alt="" />
                            <div>
                                <h3>Manaswita Solanki</h3>
                                <span>Hyderabad, IN</span>
                            </div>
                        </div>
                        <p>Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.</p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Testimonials