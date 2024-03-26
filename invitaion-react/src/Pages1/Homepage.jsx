import Carousel from "../components1/Carousel";
import ContactUs from "../components1/ContactUs";
import Hero from "../components1/Hero";
import HowItWorks from "../components1/HowItWorks";
import PopularEvents from "../components1/PopularEvents";

export default function Homepage1(){
    return(
        <div className="homepagemain">
             <Hero/>
             <Carousel/>
            <PopularEvents/>
             
            <HowItWorks/>
          
            <ContactUs/>

        </div>
    )
}