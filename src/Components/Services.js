import React from "react";
import banner from '../Assets/banner.jpg'
import '../App.css'
import { Typography } from "@mui/material";

const Services = () =>{
  return(
    <>
    <Typography sx={{textAlign:'center',fontSize:20,color:'blue',fontWeight:'bold'}}>What We Offer</Typography>
    <p style={{padding:10}}>
    <span style={{fontSize:20,fontWeight:'bold'}}>Food Delivery: </span><br></br> Whether it’s breakfast, lunch, dinner, or a midnight snack, our platform connects you with your favorite restaurants, ensuring fast delivery every time.
</p>
<p style={{padding:10}}>
<span style={{fontSize:20,fontWeight:'bold'}}>Grocery Delivery: </span><br></br> Running low on essentials? From fresh produce to pantry staples, we deliver everything you need from local stores to your home, saving you time and hassle.
</p>
<p style={{padding:10}}>
<span style={{fontSize:20,fontWeight:'bold'}}>Bike Taxi Service: </span><br></br> Stuck in traffic or need a quick ride? Our bike taxi service offers a fast, cost-effective way to get around the city, ensuring you reach your destination quickly.
    </p>
    </>
    

  )
}

export default Services;