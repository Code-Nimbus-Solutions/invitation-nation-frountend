import BadgeAvatars from "../../MUI components/avatar";
// import "../../../components/dash.css";
import "./Homepage.css";
import { Sidebar } from "../../MUI components/sidebar";

import { Websetup } from "../../MUI components/websetupcrd";
import Mobilehero from "../../Mobilecomponent/mobilehero";
import LabelBottomNavigation from "../../MUI components/Bottomnavigation";
import ImageUpload from "../../MUI components/imageupload";
import Navbar from "../../MUI components/Navbar";

export function Homepage() {
  return (
    // <div className="mainhomepg">
    //     <div className="mobherodev">
    //         <Mobilehero/>
    //     </div>
    //    <div className="navbar">
    //     <Navbar/>
    //    </div>
    //   <div className="sideweb">

    //         <Sidebar/>

    //   <div className="websetup" style={{zIndex:"1", }}>
    //     <Websetup/>
    //   </div></div>

    //     <div className="bottomnav" >
    //         <LabelBottomNavigation/>
    //     </div>

    // </div>
    <>
      <div className="homepage-container">
        <div className="sidebar">
          <Sidebar />
        </div>
        <div className="main-area-box">
          <div className="nav-bar">
            <Navbar />
          </div>
          <div className="main-area"></div>
        </div>
      </div>
    </>
  );
}
