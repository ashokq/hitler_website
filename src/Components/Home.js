import React from "react";
import banner from '../Assets/banner.jpg'
import '../App.css'

const Home = () =>{
  return(
    <>
    <img src={banner} alt="Banner" style={{width:'100%',objectFit:'fill'}}></img>

    <div className="mobile-only">
      <p>
      Welcome to <span style={{fontSize:20,color:'pink',fontWeight:'bold'}}>Hitler</span>, your go-to platform for all your food, groceries, and transportation needs! At Hitler, we believe in providing fast, reliable, and convenient services that make your day-to-day life easier.
      </p>
      <p>
      <span style={{fontSize:20,color:'pink',fontWeight:'bold'}}>Hitler</span> was founded with a mission to revolutionize the way people access daily essentials and transport services. Whether you're craving your favorite meal, need groceries delivered to your doorstep, or looking for a quick and reliable bike taxi, we’ve got you covered.
      </p>
    </div>
    </>
    

  )
}

export default Home;