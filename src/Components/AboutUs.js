import React from "react";
import banner from '../Assets/banner.jpg'
import '../App.css'
import { Typography } from "@mui/material";


const AboutUs = () =>{
  return(
    <>
     <Typography sx={{textAlign:'center',fontSize:20,color:'blue',fontWeight:'bold'}}>About Us</Typography>
     <p style={{padding:10}}>At <span style={{fontSize:20,color:'pink',fontWeight:'bold'}}>Hitler</span>, we’re dedicated to making your life easier by bringing essential services right to your doorstep. Whether you need a quick meal, fresh groceries, or a fast and reliable bike taxi service, we’ve got you covered.</p>
    <p style={{padding:10}}>
    <span style={{fontSize:20,fontWeight:'bold'}}>Our Mission: </span>
    We believe that time is precious, and at QuickServe, we aim to give you more of it. Our mission is to redefine the way you access food, groceries, and transportation by creating a seamless experience that combines quality and speed.
    </p>
    <p style={{padding:10}}>
    <span style={{fontSize:20,fontWeight:'bold'}}>Why Choose Us? </span><br></br>
Speed: We pride ourselves on being one of the fastest delivery services in town. Whether it’s food, groceries, or transport, QuickServe lives up to its name.<br></br>

Convenience: Our all-in-one platform is designed to make your life easier. With just a few taps, you can order food, buy groceries, or book a bike ride.<br></br>

Reliability: At QuickServe, we work around the clock to ensure timely deliveries and rides. You can count on us to be there when you need us the most.<br></br>
    </p>
    </>
    

  )
}

export default AboutUs;