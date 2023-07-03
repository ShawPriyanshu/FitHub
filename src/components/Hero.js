import React, { useRef } from 'react'
import Typical from 'react-typical'
import emailjs from '@emailjs/browser'
import img1 from './../images/builder.png'

export default function Hero() {
        const form=useRef()
        const sendEmail = (e) => {
            e.preventDefault();
        
            emailjs.sendForm('service_6q715s9', 'template_zppghzf', form.current, 'RROmllKk1u55N4DmH')
              .then((result) => {
                  console.log(result.text);
              }, (error) => {
                  console.log(error.text);
              });
          };
    return (

        <div>

            <div className="hero" style={{ backgroundColor: "#3A3B3C", backgroundImage: "url('https://t3.ftcdn.net/jpg/01/19/59/74/360_F_119597487_SnvLBdheEGOxu05rMQ5tCzo250cRrTz9.jpg')", backgroundSize: "cover", height: "auto", objectFit: "contain" ,backgroundAttachment:"fixed"}}>
                <div className="blur hero-blur">

                </div>
                <div className="left-h" style={{ backdropFilter: "blur(5px)" }}>
                    <div className="the-best">
                        <h4 style={{ fontFamily: "Times New Roman" }}>{" "}
                            <Typical
                                steps={["Welcome to FitHub!!", 3000, "The world of Fitness!", 3000]}
                                loop={Infinity}
                                wrapper="p"
                            />
                        </h4>

                    </div>
                    <div className="counter">
                        <h5 style={{ color: "white", fontFamily: "Times New Roman" }}>We are a growing community of <span style={{ color: "#301934", fontSize: "28px" }}>7000+</span>fitness enthusiasts at present</h5>
                    </div>


                    <div className="hero-txt">
                        <div><span className='get'>Get </span><span>Ready</span></div>
                        <div><span>to </span><span>fight!</span></div>
                        <div className="pitch">
                            <h5>We believe in your potential. Join our fitness community and let us help you unleash your inner athlete</h5>
                        </div>
                    </div>
                    <div className="entry">
                    <form ref={form} action="" className="emailContainer">
                            <input type="email" placeholder="Enter your Email address" name="user-email"/>
                        </form>
                    <div className="buttons">
                        
                        <button className="btn" onClick={sendEmail}>Join Community</button>
                        <button className="btn">Learn More</button>
                    </div>
                    </div>
                </div>
                <div className="right-h" style={{ backdropFilter: "blur(5px)" }}>
                    <img src={img1} alt="" className="hero_image" />
                    <div className="connect">
                        <ul className="sci" type="none">
                            <li><a href="https://www.facebook.com/priyanshu.shaw.9404/" target="_blank" ><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                            <li><a href="https://www.instagram.com/shaw_2801/" target="_blank" ><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
                            <li><a href="www.linkedin.com/in/priyanshu-shaw-59a852235" target="_blank"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
                            <li><a href="https://www.youtube.com/@priyanshushaw7997/videos" target="_blank"><i className="fa fa-youtube" aria-hidden="true"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
            
        </div>
    )
}
