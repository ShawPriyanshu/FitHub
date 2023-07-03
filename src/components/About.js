import React from 'react'
import img1 from './../images/FitHublogo.png'

export default function About() {
    return (
        <div>
            <div className="about-body" style={{ letterSpacing: "2px", position: "relative", backgroundSize: "cover", backgroundAttachment: "fixed", objectFit: "contain", height: "auto", paddingTop: "40px", margin: "0px" }}>
                <div className="abouthead pt-5"><h1>GET TO KNOW <span style={{ color: "transparent", WebkitTextStrokeColor: "white", WebkitTextStrokeWidth: "1px" }}>ABOUT</span> US</h1></div>
                <div className="container px-4 py-5 my-0" id="hanging-icons" style={{ backdropFilter: "blur(5px)", marginTop: "20px", color: "white" }}>
                    <h1 className="pb-2 border-bottom" style={{ textAlign: "center", fontStyle: "italic" }}>EXPLORE OUR <span className="programs" style={{ color: "transparent", WebkitTextStrokeColor: "white", WebkitTextStrokeWidth: "1px" }}>PROGRAMS</span></h1>
                    <div className="row g-5 py-5 ">
                        <div className="pro col d-flex align-items-start">
                            <span className="material-symbols-outlined pt-4" style={{ color: "purple" }} >
                                exercise
                            </span>
                            <div className="pb-2 pt-3">
                                <h3 className="fs-2 ">Strength Training</h3>
                                <p className='para'> In this program,We train you to enhance your strength through many exercises sequencially.You can avail this program both online and offline in our Gymnasium.Click on the join button and avail this program now at minimal cost</p>

                                <button className="join btn btn pt-1 mt-2" >Join Now</button>
                            </div>
                        </div>
                        <div className="pro col d-flex align-items-start">
                            <span className="material-symbols-outlined pt-4" style={{ color: "purple" }}>
                                cardiology
                            </span>
                            <div className='pb-2 pt-3'>
                                <h3 className="fs-2 ">Cardio Training</h3>
                                <p>In this program, You are introduced to exercise that boots your heart health and to help you in reducing fat.You can avail this program both online and offline in our Gymnasium.Click on the join button and avail this program now at minimal cost</p>
                                <button className=" join btn btn pt-1 mt-2">Join Now</button>
                            </div>
                        </div>
                        <div className="pro col d-flex align-items-start">

                            <span className="material-symbols-outlined pt-4" style={{ color: "purple" }}>
                                sports_gymnastics
                            </span>
                            <div className="pb-2 pt-3">
                                <h3 className="fs-2 ">Health Fitness</h3>
                                <p>This program is exclusively for those whose main focus is on maintaining the physique rather than body-building.You can avail this program both online and offline in our Gymnasium.Click on the join button and avail this program now at minimal cost</p>
                                <button className="join btn btn pt-1 mt-2">Join Now</button>
                            </div>
                        </div>
                    </div>
                </div>
                {/*facilities*/}
                <div className="facilites" style={{ backdropFilter: "blur(5px)", }}>
                    <div className="facilhead"><h1>WORLD CLASS <span style={{ color: "transparent", WebkitTextStrokeColor: "white", WebkitTextStrokeWidth: "1px" }}>FACILITIES</span></h1></div>
                    <div className="row">
                        <div className="col-md-5" style={{ position: "relative" }} >
                            <div className="gymimage">
                                <img src="https://i.vimeocdn.com/video/1437564775-8a3a147b7e702329ff302f2a5ca68be5a9d217982aaa1370f1adab9740ce840d-d_640" className="gympic" alt="" />
                            </div>
                        </div>
                        <div className="col-md-7">
                            <ul className="list">
                                <li><span className="material-symbols-outlined"  style={{ color: "#52307c", fontSize: "40px" }}>
                                    check_circle
                                </span><span>140+ EXPERT TRAINERS</span></li>
                                <li><span className="material-symbols-outlined"  style={{ color: "#52307c", fontSize: "40px" }}>
                                    check_circle
                                </span><span>OVER 600+ EQUIPMENTS</span></li>
                                <li><span className="material-symbols-outlined"  style={{ color: "#52307c", fontSize: "40px" }}>
                                    check_circle
                                </span><span>PERSONAL MENTORSHIP</span></li>
                                <li><span className="material-symbols-outlined"  style={{ color: "#52307c", fontSize: "40px" }}>
                                    check_circle
                                </span><span>CUSTOMISED DIET</span></li>
                                <li><span className="material-symbols-outlined"  style={{ color: "#52307c", fontSize: "40px" }}>
                                    check_circle
                                </span><span>100+ OFFLINE GYMNASIUMS</span></li>
                                <li><span className="material-symbols-outlined"  style={{ color: "#52307c", fontSize: "40px" }}>
                                    check_circle
                                </span><span>RELIABLE PARTNERS</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}