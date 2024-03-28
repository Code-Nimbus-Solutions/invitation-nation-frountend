import Carousel from "../components/Carousel";
import ContactUs from "../components/ContactUs";
import Hero from "../components/Hero";
import HowItWorks from "../components/HowItWorks";
import PopularEvents from "../components/PopularEvents";

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