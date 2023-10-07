import React from 'react';
import Carousel from 'react-material-ui-carousel'
import Item from './Item';
import { returnsvg,corosal2,corosal1, corosal3, corosal5, corosal4} from '../../assets'

function Example()
{
    var items = [
        {
            corosal:corosal1,
            siteArea: "PERUNGUDI",
            mgpLayout: "MGP Joyous",
            returnpercent:"9%",
            investment:"INR 5,00,000",
            period:"6 months",
            priceTag:"$7,00,00,000 / $7,00,00,000",
            pricepercent:"100%"
        },
        {
            corosal:corosal2,
            siteArea: "PERUNGUDI",
            mgpLayout: "MGP Joyous",
            returnpercent:"5%",
            investment:"INR 4,00,000",
            period:"5 months",
            priceTag:"0 / $7,00,00,000",
            pricepercent:"70%"
        },
        {
            corosal:corosal3,
            siteArea: "KADHANCHAVDI",
            mgpLayout: "MGP Uprise",
            returnpercent:"9%",
            investment:"INR 4,00,000",
            period:"5 months",
            priceTag:"₹0 / ₹ 1,50,00,000",
            pricepercent:"90%"
        },
        {
            corosal:corosal4    ,
            siteArea: "VELACHERY",
            mgpLayout: "MGP Commercial Plot",
            returnpercent:"5%",
            investment:"INR 9,00,000",
            period:"6 months",
            priceTag:"₹0 / ₹ 2,00,00,000",
            pricepercent:"80%"
        },
        {
            corosal:corosal5,
            siteArea: "Thazhambur",
            mgpLayout: "MGP Kings Park",
            returnpercent:"5%",
            investment:"INR 9,00,000",
            period:"6 months",
            priceTag:"₹0 / ₹ 2,00,00,000",
            pricepercent:"50%"
        },
    ]

    return (
        <Carousel>
            {
                items.map( (item, i) => <Item key={i} item={item} /> )
            }
        </Carousel>
    )
}

export default Example