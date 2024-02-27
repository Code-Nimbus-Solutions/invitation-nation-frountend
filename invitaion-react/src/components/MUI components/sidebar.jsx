import { NavLink } from "react-router-dom";
import Sidebardata from "./sidebardata";
import iconsd from '/src/assets/image 5 1 1 (1).svg'

export function Sidebar() {
  return (
    <div className="route" style={{ position: "fixed" }}>
      <div className="sidebarmain sticky">
        <div className="iconcon">
          <img src={iconsd} alt="" className="iconsd" />
          <h1 className="invit">Invitation Icon</h1>
        </div>
        <div className="conttainer">
          {Sidebardata.map((item, index) => (
            <NavLink
              to={item.path}
              key={index}
              activeclassname="active" // Change activeClassName to activeclassname
              style={{ display: "flex", textDecoration: "none" }}
            >
              <img src={item.icon} alt="" className="iconsid" style={{ color: "#C874E8" }}/>
              <p className="dash">{item.title}</p>
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
}
