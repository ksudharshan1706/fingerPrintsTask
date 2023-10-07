import React from 'react';
import "./Testimonils2.css"
import Carousel from 'react-material-ui-carousel'

function Testimonials2()
{
    var items = [
        {
            name: "Mr. Balaji ",
            authorImg:"https://i0.wp.com/perell.com/wp-content/uploads/2020/12/Balaji-Srinivasan.jpeg?fit=800%2C800&ssl=1",
            description: " I would like to thank Invest In, it made investing in real estate easy, user friendly and transparent. Dedicated investor support team clarified all my queries regarding the investment and ROI. They have a structured way of process for the entire investment tenure with additional benefits. As a happy investor, I strongly recommend Invest In",
            project:"Raj park Medavakkam project"
        },
        {
            name: "Andrew Tobias",
            authorImg:"https://upload.wikimedia.org/wikipedia/commons/8/84/Andrew_Tobias_2016-03-27.jpeg",
            description: "For value investing, we recommend Benjamin Graham’s The Intelligent Investor, a favorite of many of the world’s most successful investors. For a solid book on investing overall, we cite The Only Investment Guide You’ll Ever Need",
            project:"The Bond King"
        },
        {
            name: "Erin Lowry",
            authorImg:"https://www.stackingbenjamins.com/wp-content/uploads/2014/02/Erin-Lowry-Broke-Millennial-on-Stacking-Benjamins.jpg",
            description: "Tactics the Wealthy Use to Make and Preserve Wealth,” Lowry quotes Maria Bruno, CFP, senior investment analyst at Vanguard: “With Millennials or young investors, really, the key is to save, and, really, it’s asset allocation...it’s really about how do I decide in terms of how much to maximize my savings, while also paying down debt. It’s that balancing act.",
            project:"Get Good with Money"
        }
    ]

    return (
        <Carousel>
            {
                items.map( (item, i) => <Item key={i} item={item} /> )
            }
        </Carousel>
    )
}

function Item({item})
{ 
    const {name,authorImg,description,project} = item;
    return (
    <div className='testiContiner'>
        <div>
           {description}
        </div>
        <div className='testimonialAuthor'>
            <div className='authorImgContainer'>
                <img  className='authorImg' src={authorImg} style={{height:"50px",width:"50px",borderRadius:"50%",objectFit:"cover"}}/>{"  "}
                <div>{name}</div>
            </div>
            <div className='authonProject'>{project}</div>
        </div>
    </div>
    )
}

export default Testimonials2
