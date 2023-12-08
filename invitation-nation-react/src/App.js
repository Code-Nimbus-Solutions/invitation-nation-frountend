import HERO from "./components/Hero";
import CAROUSEL from "./components/Carousel";
import POPULAREVENTS from "./components/PopularEvents";
import HOWITWORKS from "./components/HowItWorks";
import CONTACTUS from "./components/ContactUs";
import "./App.css";

function App() {
  return (
    <div>
      <HERO />
      <CAROUSEL />
      <POPULAREVENTS />
      <HOWITWORKS />
      <CONTACTUS />
    </div>
  );
}

export default App;
