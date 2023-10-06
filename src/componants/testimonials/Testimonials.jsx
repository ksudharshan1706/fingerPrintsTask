import React from 'react'
import "./Testimonial.css"
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
const Testimonials = () => {
  return (
    <div>
        <div className='testimonals'>Testimonials</div>
        <div id="carouselExampleIndicators" className="carousel slide" >
            <div className="carousel-inner container-fluid" style={{height:"500px",width:"700px"}}>
                <div className="carousel-item active" >
                    <div className='maincontainer'>
                        <div>
                            1 I would like to thank Invest In, it made investing in real estate easy, user friendly and transparent. Dedicated investor support team clarified all my queries regarding the investment and ROI. They have a structured way of process for the entire investment tenure with additional benefits. As a happy investor, I strongly recommend Invest In
                        </div>
                        <div className='maincontainerbelow'>Mr. Balaji 
                            Raj park Medavakkam project
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className='maincontainer'>
                            <div>
                                2 I would like to thank Invest In, it made investing in real estate easy, user friendly and transparent. Dedicated investor support team clarified all my queries regarding the investment and ROI. They have a structured way of process for the entire investment tenure with additional benefits. As a happy investor, I strongly recommend Invest In
                            </div>
                            <div className='maincontainerbelow'>Mr. Balaji 
                                Raj park Medavakkam project
                            </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className='maincontainer'>
                            <div>
                                3 I would like to thank Invest In, it made investing in real estate easy, user friendly and transparent. Dedicated investor support team clarified all my queries regarding the investment and ROI. They have a structured way of process for the entire investment tenure with additional benefits. As a happy investor, I strongly recommend Invest In
                            </div>
                            <div className='maincontainerbelow'>Mr. Balaji 
                                Raj park Medavakkam project
                            </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className='maincontainer'>
                            <div>
                                4 I would like to thank Invest In, it made investing in real estate easy, user friendly and transparent. Dedicated investor support team clarified all my queries regarding the investment and ROI. They have a structured way of process for the entire investment tenure with additional benefits. As a happy investor, I strongly recommend Invest In
                            </div>
                            <div className='maincontainerbelow'>Mr. Balaji 
                                Raj park Medavakkam project
                            </div>
                    </div>
                </div>
            </div>
            {/* <div style={{backgroundColor:"black",width:"100px",height:"100px"}}> */}
                <button  style={{backgroundColor:"grey",color:"white",width:"50px",height:"50px",marginTop:"150px",borderRadius:"50%"}} className="carousel-control-prev btn-carosel" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon  btn-carosel" aria-hidden="true"></span>
                    <span className="visually-hidden btn-carosel">Previous</span>
                </button>
            {/* </div> */}
            <button style={{backgroundColor:"grey",color:"white",width:"50px",height:"50px",marginTop:"150px",marginright:"100px",borderRadius:"50%"}}
             className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
            </div>
    </div>
  )
}

export default Testimonials